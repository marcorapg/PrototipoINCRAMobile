import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Registro {
  id: number;
  nome: string;
  descricao?: string;
  fase: number;
  passo: number;
}

@Injectable({
  providedIn: 'root'
})
export class Gestaoinadimplenciaservice {

  // ===== BASE ESTÁTICA (imutável) =====
  private initialData: Registro[] = [
    { id: 1, nome: 'Registro 1', descricao: 'Exemplo', fase: 1, passo: 0 },
    { id: 2, nome: 'Registro 2', descricao: 'Exemplo', fase: 1, passo: 2 },
    { id: 3, nome: 'Registro 3', descricao: 'Exemplo', fase: 2, passo: 1 }
  ];

  // ===== ESTADO ATUAL (mutável) =====
  private data: Registro[] = [];
  private idCounter = 1;

  private dataSubject = new BehaviorSubject<Registro[]>([]);
  data$: Observable<Registro[]> = this.dataSubject.asObservable();

  constructor() {
    this.reset(); // inicializa com base nos dados estáticos
  }

  // ===== READ =====
  getAll(): Registro[] {
    return [...this.data];
  }

  getById(id: number): Registro | undefined {
    return this.data.find(item => item.id === id);
  }

  // ===== CREATE =====
  add(registro: Omit<Registro, 'id'>): Registro {
    const novoRegistro: Registro = {
      id: this.idCounter++,
      ...registro
    };

    this.data.push(novoRegistro);
    this.emitChanges();
    return novoRegistro;
  }

  // ===== UPDATE =====
  update(id: number, dados: Partial<Registro>): boolean {
    const index = this.data.findIndex(item => item.id === id);
    if (index === -1) return false;

    this.data[index] = {
      ...this.data[index],
      ...dados
    };

    this.emitChanges();
    return true;
  }

  // ===== DELETE =====
  delete(id: number): boolean {
    const index = this.data.findIndex(item => item.id === id);
    if (index === -1) return false;

    this.data.splice(index, 1);
    this.emitChanges();
    return true;
  }

  // ===== CHANGE PHASE =====
  changePhase(id: number, novaFase: number): boolean {
    const registro = this.getById(id);
    if (!registro) return false;

    registro.fase = novaFase;
    this.emitChanges();
    return true;
  }

  // ===== CHANGE STEP =====
  changeStep(id: number, novoPasso: number): boolean {
    const registro = this.getById(id);
    if (!registro) return false;

    registro.passo = novoPasso;
    this.emitChanges();
    return true;
  }

  // ===== RESET =====
  reset(): void {
    // clone profundo para evitar referência compartilhada
    this.data = this.initialData.map(item => ({ ...item }));

    // recalcula o idCounter
    this.idCounter =
      this.data.length > 0
        ? Math.max(...this.data.map(i => i.id)) + 1
        : 1;

    this.emitChanges();
  }

  // ===== HELPER =====
  private emitChanges() {
    this.dataSubject.next([...this.data]);
  }
}
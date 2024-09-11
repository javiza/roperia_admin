import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite'

export interface Prenda {
  id?: number
  nombre: string
  cantidad: number
  descripcion: string
}

@Injectable({
  providedIn: 'root'
})
export class PrendaService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  private db!: SQLiteDBConnection

  constructor() { } 

  async IniciarPlugin() {
    this.db = await this.sqlite.createConnection(
      "prendas.sqlite", false, 'no-encryption', 1, false
    )
    await this.db.open()
    const schema = `
      CREATE TABLE IF NOT EXISTS prendas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      cantidad INTEGER DEFAULT 0,
      descripcion TEXT
      );
      `
      await this.db.execute(schema)
  }
  async cerrarConexion() {
    this.db.close()
  }
  async addPrenda(prenda:Prenda){
    const sql = `INSERT INTO prendas(nombre, cantidad, descripcion) VALUES(?,?)`
    await this.db.run(sql, [prenda.nombre, prenda.cantidad, prenda.descripcion])
  }
  async updatePrenda(prenda:Prenda){
    const sql = `UPDATE prendas SET  nombre, cantidad, description = ? WHERE id = ?`
    console.log("updatePrenda()")
    console.log(`update prendas set nombre = ${prenda.nombre}, cantidad = ${prenda.cantidad}, decripcion = ${prenda.descripcion}`)
    await this.db.run(sql, [prenda.nombre, prenda.cantidad, prenda.descripcion, prenda.id])
  }
  async deletePrenda(id:number) {
    const sql = `DELETE FROM prendas WHERE id = ?`
    await this.db.run(sql, [id])
  }
  async findAllPrendas(){
    const prendas = await this.db.query('SELECT * FROM prendas');
    return prendas.values ?? []
  }

}
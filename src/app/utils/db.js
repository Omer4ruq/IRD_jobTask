import sqlite3 from "sqlite3";

import sql from "better-sqlite3";

const db = sql("dua_main.sqlite");

export function getCategory() {
  return db.prepare("SELECT * FROM category").all();
}
export function getSubCategory() {
  return db.prepare("SELECT * FROM sub_category").all();
}
export function getDua() {
  return db.prepare("SELECT * FROM dua").all();
}

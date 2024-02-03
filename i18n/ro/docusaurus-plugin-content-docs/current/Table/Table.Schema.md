---
title: Table.Schema
---

# Table.Schema


## Description

Returnează un tabel ce conține o descriere a coloanelor (de ex., schema) tabelului specificat.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Returnează un tabel care descrie coloanele din <code>table</code>.<br />Fiecare rând din tabel descrie proprietățile unei coloane din <code>table</code>:<br /><table>  <tr>    <td><b>Numele coloanei</b></td>    <td><b>Descriere</b></td>  </tr>  <tr>    <td><code>Nume</code></td>    <td>Numele coloanei.</td>  </tr>  <tr>    <td><code>Poziție</code></td>    <td>Poziția bazată pe 0 a coloanei din <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Numele tipului de coloană.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Tipul tipului coloanei.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Dacă coloana poate conține valori <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Baza numerică (de exemplu, baza 2 sau baza 10) a câmpurilor <code>NumericPrecision</code> și <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Precizia unei coloane numerice în baza specificată de <code>NumericPrecisionBase</code>. Acesta este numărul maxim de cifre care pot fi reprezentate de o valoare de acest tip (inclusiv cifrele fracționare).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Scala unei coloane numerice în baza specificată de <code>NumericPrecisionBase</code>. Acesta este numărul de cifre din partea fracționară a unei valori de acest tip. O valoare <code>0</code> indică o scală fixă fără cifre fracționare. O valoare <code>null</code> indică faptul că scala nu este cunoscută (deoarece este flotantă sau nedefinită).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Numărul maxim de cifre fracționare acceptate în porțiunea secunde a unei valori dată sau oră.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Numărul maxim de caractere permise într-o coloană <code>text</code> sau numărul maxim de byți permiși într-o coloană <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Indică dacă această coloană poate varia în lungime (până la <code>MaxLength</code>) sau dacă are dimensiune fixă.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Numele tipului de coloană din sistemul de tipuri nativ al sursei (de exemplu, <code>nvarchar</code> pentru SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Expresia implicită pentru o valoare a acestei coloane în limba de expresie nativă a sursei (de exemplu, <code>42</code> sau <code>newid()</code> pentru SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Descrierea coloanei.</td>  </tr></table><br />



## Category
Table.Information

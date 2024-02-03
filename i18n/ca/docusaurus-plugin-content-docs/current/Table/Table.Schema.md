---
title: Table.Schema
---

# Table.Schema


## Description

Retorna una taula que conté una descripció de les columnes (p. ex. l&#39;esquema) de la taula especificada.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Retorna una taula que descriu les columnes de <code>table</code>.<br />Cada fila de la taula descriu les propietats d'una columna de <code>table</code>:<br /><table>  <tr>    <td><b>Nom de la columna</b></td>    <td><b>Descripció</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>Nom de la columna.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td>Posició basada en 0 de la columna de <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>Nom del tipus de columna.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>Tipus de columna.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Si la columna pot contenir valors <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>Base numèrica (per exemple, base 2, base 10) dels camps <code>NumericPrecision</code> i <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>Precisió d'una columna numèrica de la base especificada pel valor <code>NumericPrecisionBase</code>. Aquest és el nombre màxim de dígits que pot representar un valor d'aquest tipus (inclosos els dígits fraccionaris).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>Escala d'una columna numèrica de la base especificada pel valor <code>NumericPrecisionBase</code>. És el nombre de dígits de la part fraccionària d'un valor d'aquest tipus. Un valor de <code>0</code> indica una escala fixa sense dígits fraccionaris. Un valor <code>null</code> indica que es desconeix l'escala, bé perquè està flotant o perquè no s'ha definit.</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>Nombre màxim de dígits fraccionaris que s'admet a la porció de segons d'un valor d'hora o data.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>Nombre màxim de caràcters que s'admet en una columna <code>text</code> o el nombre màxim de bytes que s'admet en una columna <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Indica si aquesta columna pot tenir variacions de longitud (fins a <code>MaxLength</code>) o si té una mida fixa.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>Nom del tipus de columna en el sistema de tipus nadiu de l'origen (p. ex. <code>nvarchar</code> per a l'SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>Expressió per defecte d'un valor d'aquesta columna en la llengua d'expressió nativa de l'origen (per exemple <code>42</code> o <code>newid()</code> per a l'SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>Descripció de la columna.</td>  </tr></table><br />



## Category
Table.Information

---
title: Table.Schema
---

# Table.Schema


## Description

Devolve unha táboa que contén unha descrición das columnas (p. ex. o esquema) da táboa especificada.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Devolve unha táboa na que se describen as columnas de <code>table</code>.<br />En cada fila da táboa, descríbense as propiedades dunha columna de <code>table</code>:<br /><table>  <tr>    <td><b>Nome da columna</b></td>    <td><b>Descrición</b></td>  </tr>  <tr>    <td><code>Nome</code></td>    <td>O nome da columna.</td>  </tr>  <tr>    <td><code>Posición</code></td>    <td>A posición segundo 0 da columna en <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>O nome do tipo de columna.</td>  </tr>  <tr>    <td><code>Clase</code></td>    <td>A clase do tipo de columna.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Se a columna pode conter valores <code>null</code> ou non.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>A base numérica (p. ex., base-2, base-10) dos campos <code>NumericPrecision</code> e <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>A precisión dunha columna numérica na base especificada por <code>NumericPrecisionBase</code>. Este é o número máximo de díxitos que pode representar un valor deste tipo (incluídos os díxitos fraccionais).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>A escala dunha columna numérica na base especificada por <code>NumericPrecisionBase</code>. Este é o número de díxitos na parte fraccional dun valor deste tipo. Un valor de <code>0</code> indica unha escala fixa sen díxitos fraccionais. Un valor de <code>null</code> indica que non se coñece a escala (xa sexa porque é flotante ou porque non está definida).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>O número máximo de díxitos fraccionais que se admiten na segunda porción dun valor de data ou hora.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>O número máximo de caracteres permitidos nunha columna de <code>texto</code> ou o número máximo de bytes permitidos nunha columna <code>binaria</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Indica se esta columna pode variar en duración (ata <code>MaxLength</code>) ou se é de tamaño fixo.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>O nome do tipo da columna no sistema de tipo nativo da orixe (p. ex., <code>nvarchar</code> para SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>A expresión predefinida para un valor desta columna no idioma de expresión nativo da orixe (p. ex., <code>42</code> ou <code>newid()</code> para SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Descrición</code></td>    <td>A descrición da columna.</td>  </tr></table><br />



## Category
Table.Information

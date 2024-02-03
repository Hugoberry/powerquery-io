---
title: Table.Schema
---

# Table.Schema


## Description

Muestra una tabla que contiene una descripción de las columnas (p.e., el esquema) de la tabla especificada.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

Regresa una tabla que describe las columnas de <code>table</code>.<br />Cada fila de la tabla describe las propiedades de una columna de <code>table</code>:<br /><table>  <tr>    <td><b>Nombre de columna</b></td>    <td><b>Descripción</b></td>  </tr>  <tr>    <td><code>Nombre</code></td>    <td>El nombre de las columnas.</td>  </tr>  <tr>    <td><code>Posición</code></td>    <td>La posición 0 de la columna in <code>table</code>.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>El nombre del tipo de columna.</td>  </tr>  <tr>    <td><code>Tipo</code></td>    <td>La clase de tipo de la columna.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>Si la columna puede o no contener valores <code>null</code>.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td>La base numérica (por ejemplo, base-2 o base-10) de los campos <code>NumericPrecision</code> y <code>NumericScale</code>.</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td>La precisión de una columna numérica en la base especificada por <code>NumericPrecisionBase</code>. Este es el número máximo de dígitos que se puede representar con un valor de este tipo (incluidos los dígitos fraccionarios).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td>La escala de una columna numérica en la base especificada por <code>NumericPrecisionBase</code>. Este es el número de dígitos en la parte fraccionaria de un valor de este tipo. Un valor de <code>0</code> indica una escala fija sin dígitos fraccionarios. Un valor de <code>null</code> indica que la escala no se conoce (ya sea porque es flotante o no está definida).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td> El número máximo de dígitos fraccionarios admitidos en la parte de segundos de un valor de fecha u hora.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>El número máximo de caracteres permitidos en una columna <code>texto</code>, o el número máximo de bytes permitidos en una columna <code>binary</code>.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>Indica si esta columna puede variar en longitud (hasta <code>MaxLength</code>) o si es de tamaño fijo.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>El nombre del tipo de columna en el sistema de tipos nativo de la fuente (por ejemplo, <code>nvarchar</code> para SQL Server).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>La expresión predeterminada para un valor de esta columna en el idioma de expresión nativo de la fuente (por ejemplo, <code>42</code> o <code>newid()</code> para SQL Server).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>La descripción de la columna.</td>  </tr></table><br />



## Category
Table.Information

---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Combina as columnas especificadas nunha nova columna cun valor de rexistro onde cada rexistro ten nomes e valores de campo correspondentes aos nomes e valores das columnas que se combinaron.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

Combina as columnas especificadas de <code>table</code> nunha nova columna con valor de rexistro denominada <code>newColumnName</code> onde cada rexistro ten os valores e nomes de campo correspondentes aos valores e nomes das columnas que se combinaron. Se se especifica un rexistro para <code>options</code>, pódense fornecer as seguintes opcións:    <ul>     <li> <code>DisplayNameColumn</code>: ao especificalo como texto, indica que o nome da columna dada débese tratar como o nome para mostrar do rexistro. Non é preciso que sexa unha das columnas do rexistro.</li>     <li> <code>TypeName</code>: ao especificalo como texto, fornece un nome de tipo lóxico para o rexistro resultante que se pode usar durante a carga de datos para que o ambiente de carga controle o comportamento.</li>    </ul>    



## Category
Table.Transformation

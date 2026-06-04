---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


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


## Remarks

Combina as columnas especificadas de `table` nunha nova columna con valor de rexistro denominada `newColumnName` onde cada rexistro ten os valores e nomes de campo correspondentes aos valores e nomes das columnas que se combinaron. Se se especifica un rexistro para `options`, pódense fornecer as seguintes opcións:

-   `DisplayNameColumn`: ao especificalo como texto, indica que o nome da columna dada débese tratar como o nome para mostrar do rexistro. Non é preciso que sexa unha das columnas do rexistro.
-   `TypeName`: ao especificalo como texto, fornece un nome de tipo lóxico para o rexistro resultante que se pode usar durante a carga de datos para que o ambiente de carga controle o comportamento.



## Category
Table.Transformation

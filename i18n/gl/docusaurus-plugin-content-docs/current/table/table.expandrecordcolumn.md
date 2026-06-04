---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Expande unha columna de rexistros en columnas con cada un dos valores.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Dada a `column` de rexistros na `table` de entrada, crea unha táboa cunha columna para cada campo do rexistro. Opcionalmente, pódese especificar `newColumnNames` para garantir nomes exclusivos para as columnas da nova táboa.

-   `table`: a táboa orixinal coa columna de rexistro que se vai expandir.
-   `column`: a columna que se vai expandir.
-   `fieldNames`: a lista de campos que se van expandir en columnas da táboa.
-   `newColumnNames`: a lista de nomes de columnas que se van dar ás novas columnas. Os novos nomes de columna non poden duplicar ningunha columna na nova táboa.


## Examples

### Example #1
Expandir a columna \[a\] da táboa `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` en 3 columnas "aa", "bb" e "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation

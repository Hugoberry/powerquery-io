---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplica uma coluna com o nome especificado. Os valores e o tipo são copiados da coluna de origem.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

Duplique a coluna denominada `columnName` para a tabela `table`. Os valores e o tipo da coluna `newColumnName` são copiados da coluna `columnName`.


## Examples

### Example #1
Duplicar a coluna "a" para uma coluna chamada "coluna copiada" na tabela `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations

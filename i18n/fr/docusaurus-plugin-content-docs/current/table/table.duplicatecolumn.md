---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplique une colonne portant le nom spécifié. Les valeurs et le type sont copiés de la colonne source.


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

Dupliquer la colonne nommée `columnName` vers la table `table`. Les valeurs et le type de la colonne `newColumnName` sont copiés depuis la colonne `columnName`.


## Examples

### Example #1
Duplique la colonne « a » sur une colonne nommée « colonne copiée » dans la table `({[a = 1, b = 2], [a = 3, b = 4]})`.
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

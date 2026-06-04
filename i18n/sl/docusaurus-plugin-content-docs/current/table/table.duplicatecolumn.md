---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Podvoji stolpec z navedenim imenom. Vrsta in vrednosti so kopirane iz izvornega stolpca.


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

Podvojite stolpec z imenom `columnName` v tabelo `table`. Vrsta in vrednosti za stolpec `newColumnName` so kopirane iz stolpca `columnName`.


## Examples

### Example #1
Podvojite stolpec"a"v stolpec z imenom"copied column"v tabeli `({[a = 1, b = 2], [a = 3, b = 4]})`.
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

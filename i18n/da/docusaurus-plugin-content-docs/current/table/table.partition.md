---
title: Table.Partition
---

# Table.Partition


Partitionér tabellen til en liste over tabeller baseret på antallet af grupper og den angivne kolonne.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Partitionér `table` til en liste over `groups` antal tabeller baseret på værdien i `column` og en funktion af typen `hash`. Funktionen `hash` anvendes på værdien i rækken `column` for at få en hashværdi for rækken. Hashværdiens modulus `groups` bestemmer, hvilken af de returnerede tabeller rækken placeres i.

-   `table`: Den tabel, der skal partitioneres.
-   `column`: Den kolonne, der skal indeholde en hashværdi, for at afgøre, hvilken returneret tabel rækken placeres i.
-   `groups`: Antallet af tabeller, som inputtabellen partitioneres til.
-   `hash`: Den funktion, der anvendes for at opnå en hashværdi.


## Examples

### Example #1
Partitionér tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` til to tabeller i kolonne \[a\] ved at bruge værdien i kolonnerne som hashfunktion.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations

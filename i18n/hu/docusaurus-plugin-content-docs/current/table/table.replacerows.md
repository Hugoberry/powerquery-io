---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Lecseréli a megadott sortartományt a megadott sorokra.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Lecseréli a megadott számú sort (`count`) a bemeneti `table` táblában a megadott `rows` sorra a(z) `offset` után kezdve. A(z) `rows` paraméter egy rekordlista.

-   `table`: Az a tábla, amelyben a csere végre lesz hajtva.
-   `offset`: A kihagyandó sorok száma a lecserélési művelet kezdőpontja előtt.
-   `count`: A lecserélendő sorok száma.
-   `rows`: A(z) `table` táblába a(z) `offset` által megadott helyen beszúrandó rekordok listája.


## Examples

### Example #1
Az 1. pozíciótól kezdve lecserél 3 sort.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations

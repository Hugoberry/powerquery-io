---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Efectuează o uniune între tabele pe coloanele furnizate şi produce rezultatul uniunii într-o coloană nouă.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

Uneşte rândurile `table1` cu rândurile `table2` în funcţie de egalitatea valorilor din coloanele de chei selectate de `key1` (pentru `table1`) şi `key2` (pentru `table2`). Rezultatele sunt introduse în coloana cu numele `newColumnName`. Această funcţie se comportă la fel ca funcţia Table.Join cu JoinKind având valoarea LeftOuter, cu excepţia faptului că rezultatele uniunii sunt prezentate într-un mod imbricat decât într-un mod aplatizat.


## Examples

### Example #1
Adăugaţi o coloană de unire la (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) cu numele „price/stock” din tabelul (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) unit în \[saleID\].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation

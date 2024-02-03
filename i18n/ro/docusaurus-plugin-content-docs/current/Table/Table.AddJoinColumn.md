---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

Uneşte rândurile <code>table1</code> cu rândurile <code>table2</code> în funcţie de egalitatea valorilor din coloanele de chei selectate de <code>key1</code> (pentru <code>table1</code>) şi <code>key2</code> (pentru <code>table2</code>). Rezultatele sunt introduse în coloana cu numele <code>newColumnName</code>.Această funcţie se comportă la fel ca funcţia Table.Join cu JoinKind având valoarea LeftOuter, cu excepţia faptului că rezultatele uniunii sunt prezentate într-un mod imbricat decât într-un mod aplatizat.


## Examples

### Example #1 
Adăugaţi o coloană de unire la (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) cu numele „price/stock” din tabelul (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) unit în [saleID].
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

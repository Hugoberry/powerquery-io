---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

Wykonuje sprzężenie tabel z użyciem określonych kolumn i umieszcza wynik sprzężenia w nowej kolumnie.


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

Tworzy sprzężenie wierszy tabeli <code>table1</code> z wierszami tabeli <code>table2</code> na podstawie równości wartości kolumn klucza wybranych przez parametr <code>key1</code> (dla tabeli <code>table1</code>) i parametr <code>key2</code> (dla tabeli <code>table2</code>). Wyniki są umieszczane w kolumnie o nazwie <code>newColumnName</code>.Ta funkcja działa podobnie do funkcji Table.Join z parametrem JoinKind o wartości LeftOuter, z tym że wyniki są prezentowane w sposób zagnieżdżony, a nie spłaszczony.


## Examples

### Example #1 
Dodaj do tabeli (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) kolumnę sprzężenia o nazwie „price/stock” z tabeli (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}), wykonując sprzężenie według pola [saleID].
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

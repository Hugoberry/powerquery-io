---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


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


## Remarks

Tworzy sprzężenie wierszy tabeli `table1` z wierszami tabeli `table2` na podstawie równości wartości kolumn klucza wybranych przez parametr `key1` (dla tabeli `table1`) i parametr `key2` (dla tabeli `table2`). Wyniki są umieszczane w kolumnie o nazwie `newColumnName`. Ta funkcja działa podobnie do funkcji Table.Join z parametrem JoinKind o wartości LeftOuter, z tym że wyniki są prezentowane w sposób zagnieżdżony, a nie spłaszczony.


## Examples

### Example #1
Dodaj do tabeli (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) kolumnę sprzężenia o nazwie „price/stock” z tabeli (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}), wykonując sprzężenie według pola \[saleID\].
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

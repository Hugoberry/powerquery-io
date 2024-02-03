---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Táblát hoz létre oszlopok és megadott értékek listájából.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

<code>columns</code> típusú táblát hoz létre a(z) <code>lists</code> listából, amely beágyazott listákat tartalmaz az oszlopok nevével és értékeivel.    Ha valamelyik oszlop több értéket tartalmaz a többinél, akkor a hiányzó értékek az alapértelmezett „null” értékkel lesznek feltöltve, ha az oszlopok nullázhatóak.


## Examples

### Example #1 
Egy táblát ad vissza egy listában található ügyfélnevek listája alapján. Az ügyféllista elemeinek értékei a sorok értékei lesznek, az egyes listákat pedig az oszlopok jelölik.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Tábla létrehozása adott oszloplistából és az oszlopnevek listájából.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Egy olyan táblát készít, amelyben soronként különbözőek az oszlopszámok. A hiányzó sorérték null értékű.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction

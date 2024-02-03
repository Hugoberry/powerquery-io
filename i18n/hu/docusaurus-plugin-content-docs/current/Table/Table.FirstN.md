---
title: Table.FirstN
---

# Table.FirstN


## Description

A megadott darabszámú első sort adja vissza.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

A(z) <code>table</code> tábla első sorát vagy sorait adja vissza a(z) <code>countOrCondition</code> értékétől függően:    <ul>    <li> Ha a(z) <code>countOrCondition</code> egy szám, a függvény ennek megfelelő számú sort ad vissza (az elejétől kezdve). </li>    <li> Ha a(z) <code>countOrCondition</code> egy feltétel, a függvény a feltételnek megfelelő sorokat adja vissza addig, amíg olyan sort nem talál, amely nem felel meg a feltételnek.</li></ul>


## Examples

### Example #1 
Megkeresi a tábla első két sorát.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Megkeresi a tábla első olyan sorait, ahol [a] &gt; 0.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations

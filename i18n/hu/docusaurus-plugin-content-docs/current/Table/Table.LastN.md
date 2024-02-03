---
title: Table.LastN
---

# Table.LastN


## Description

Az adott számú utolsó sort adja vissza.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

A(z) <code>table</code> tábla utolsó sorát vagy sorait adja vissza a(z) <code>countOrCondition</code> értékétől függően:    <ul>    <li> Ha a(z) <code>countOrCondition</code> egy szám, a függvény ennek megfelelő számú sort ad vissza az adott pozíciótól kezdve (vége – <code>countOrCondition</code>). </li>    <li> Ha a(z) <code>countOrCondition</code> egy feltétel, a függvény a feltételnek megfelelő sorokat adja vissza a növekvő pozíciókból, amíg olyan sort nem talál, amely nem felel meg a feltételnek.</li></ul>


## Examples

### Example #1 
Megkeresi a tábla utolsó két sorát.
```powerquery
Table.LastN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Megkeresi a tábla utolsó olyan sorait, ahol [a] &gt; 0.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations

---
title: Table.FirstN
---

# Table.FirstN


## Description

Returnerer det første antal angivne rækker.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Returnerer den eller de første rækker i tabellen <code>table</code>, afhængigt af værdien i <code>countOrCondition</code>:    <ul>    <li> Hvis <code>countOrCondition</code> er et tal, returneres der så mange rækker (med start fra toppen). </li>    <li> Hvis <code>countOrCondition</code> er en betingelse, returneres de rækker, der overholder betingelsen, indtil en række ikke overholder betingelsen.</li></ul>


## Examples

### Example #1 
Find de første to rækker i tabellen.
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
Find de første to rækker, hvor [a] &gt; 0 i tabellen.
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

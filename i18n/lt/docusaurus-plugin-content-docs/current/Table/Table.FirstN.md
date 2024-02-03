---
title: Table.FirstN
---

# Table.FirstN


## Description

Pateikiamos pirmosios nurodytos eilutės pagal eilę.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Pateikiama pirmoji (-osios) lentelės, <code>table</code> eilutė (-ės), priklausomai nuo reikšmės <code>countOrCondition</code>.    <ul>    <li> Jei <code>countOrCondition</code> yra skaičius, bus pateiktas toks skaičius eilučių (pradedant nuo viršaus). </li>    <li> Jei <code>countOrCondition</code> yra sąlyga, bus pateiktos ją atitinkančios eilutės iki eilutės, kuri sąlygos neatitiks.</li></ul>


## Examples

### Example #1 
Raskite pirmąsias dvi lentelės eilutes.
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
Raskite pirmąsias eilutes, kur [a] &gt; 0, lentelėje.
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

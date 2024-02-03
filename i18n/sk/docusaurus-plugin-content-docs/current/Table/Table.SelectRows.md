---
title: Table.SelectRows
---

# Table.SelectRows


## Description

Vyberie riadky tabuľky, ktoré spĺňajú funkciu podmienky.


## Syntax

```powerquery
Table.SelectRows(
    table as table,
    condition as function
) as table
```


## Details

Vráti tabuľku riadkov z tabuľky <code>table</code>, ktorá spĺňa podmienku výberu <code>condition</code>.


## Examples

### Example #1 
Vyberte riadky v tabuľke, v ktorých sú hodnoty v stĺpci [CustomerID] väčšie ako 2.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] > 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Vyberte riadky v tabuľke, v ktorých názvy neobsahujú „B“.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each not Text.Contains([Name], "B")
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations

---
title: Table.LastN
---

# Table.LastN


## Description

Palauttaa viimeisen määritetyn rivien määrän.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Palauttaa taulukon <code>table</code> viimeiset rivit kohteen <code>countOrCondition</code> arvon mukaan:    <ul>    <li> Jos <code>countOrCondition</code> on luku, kyseinen määrä rivejä palautetaan alkaen sijainnista (end - <code>countOrCondition</code>). </li>    <li> Jos <code>countOrCondition</code> on ehto, kyseisen ehdon täyttävät rivit palautetaan käyttäen nousevaa sijaintia, kunnes jokin rivi ei täytä ehtoa.</li></ul>


## Examples

### Example #1 
Etsi taulukon viimeiset kaksi riviä.
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
Etsi taulukon viimeiset rivit, joissa [a] &gt; 0.
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

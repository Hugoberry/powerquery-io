---
title: Table.FirstN
---

# Table.FirstN


## Description

Palauttaa ensimmäiset määritetyt määrärivit.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Palauttaa taulukon <code>table</code> ensimmäiset rivit kohteen <code>countOrCondition</code> arvon mukaan:    <ul>    <li> Jos <code>countOrCondition</code> on luku, kyseinen määrä rivejä (ylhäältä alkaen) palautetaan. </li>    <li> Jos <code>countOrCondition</code> on ehto, kyseisen ehdon täyttävät rivit palautetaan, kunnes jokin rivi ei täytä ehtoa.</li></ul>


## Examples

### Example #1 
Etsi taulukon ensimmäiset kaksi riviä.
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
Etsi taulukon ensimmäiset rivit, joissa [a] &gt; 0.
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

---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Palauttaa taulukon, jonka N viimeistä riviä on poistettu.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Palauttaa taulukon, joka ei sisällä taulukon `table` viimeistä `countOrCondition` riviä. Poistettavien rivien määrä määräytyy valinnaisen parametrin `countOrCondition` mukaan.

-   Jos `countOrCondition` jätetään pois, vain viimeinen rivi poistetaan.
-   Jos `countOrCondition` on luku, kyseinen määrä rivejä (alhaalta alkaen) poistetaan.
-   Jos `countOrCondition` on ehto, kyseisen ehdon täyttävät rivit poistetaan, kunnes jokin rivi ei täytä ehtoa.


## Examples

### Example #1
Poista taulukon viimeinen rivi.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Poista taulukon viimeiset rivit, joissa \[CustomerID\] > 2.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations

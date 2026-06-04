---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


Palauttaa taulukon, jonka ensimmäiset määrärivit ohitetaan.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Palauttaa taulukon, joka ei sisällä taulukon `table` ensimmäistä määritettyä määrää rivejä `countOrCondition`. Poistettavien rivien määrä määräytyy valinnaisen parametrin `countOrCondition` mukaan.

-   Jos `countOrCondition` jätetään pois, vain ensimmäinen rivi poistetaan.
-   Jos `countOrCondition` on luku, kyseinen määrä rivejä (ylhäältä alkaen) poistetaan.
-   Jos `countOrCondition` on ehto, kyseisen ehdon täyttävät rivit poistetaan, kunnes jokin rivi ei täytä ehtoa.


## Examples

### Example #1
Poista taulukon ensimmäinen rivi.
```powerquery
Table.RemoveFirstN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2
Poista taulukon ensimmäiset kaksi riviä.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3
Poista taulukon ensimmäiset rivit, joissa \[CustomerID\] &lt;= 2.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations

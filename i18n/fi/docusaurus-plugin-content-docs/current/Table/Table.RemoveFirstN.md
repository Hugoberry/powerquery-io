---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Palauttaa taulukon, jonka ensimmäiset määrärivit ohitetaan.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Palauttaa taulukon, joka ei sisällä taulukon <code>table</code> ensimmäistä määritettyä määrää rivejä <code>countOrCondition</code>.    Poistettavien rivien määrä määräytyy valinnaisen parametrin <code>countOrCondition</code> mukaan.    <ul>    <li> Jos <code>countOrCondition</code> jätetään pois, vain ensimmäinen rivi poistetaan. </li>    <li> Jos <code>countOrCondition</code> on luku, kyseinen määrä rivejä (ylhäältä alkaen) poistetaan. </li>    <li> Jos <code>countOrCondition</code> on ehto, kyseisen ehdon täyttävät rivit poistetaan, kunnes jokin rivi ei täytä ehtoa.</li>    </ul>


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
Poista taulukon ensimmäiset rivit, joissa [CustomerID] &lt;= 2.
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

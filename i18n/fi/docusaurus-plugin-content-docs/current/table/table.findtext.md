---
title: Table.FindText
---

# Table.FindText


Palauttaa kaikki rivit, jotka sisältävät annetun tekstin taulukossa.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Palauttaa taulukon `table` rivit, jotka sisältävät tekstin `text`. Jos tekstiä ei löydy, palautetaan tyhjä taulukko.


## Examples

### Example #1
Etsi taulukon rivit, jotka sisältävät tekstin "Bob".
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations

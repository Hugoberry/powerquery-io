---
title: Table.Split
---

# Table.Split


## Description

Jakaa määritetyn taulukon taulukoiden luetteloksi käyttäen määritettyä sivun kokoa.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Jakaa <code>table</code> taulukkoluetteloksi, jossa luettelon ensimmäinen elementti on taulukko, joka sisältää lähdetaulukon ensimmäiset <code>pageSize</code> rivit. Luettelon seuraava elementti on taulukko, joka sisältää lähdetaulukon seuraavat <code>pageSize</code> rivit.  ja niin edelleen.


## Examples

### Example #1 
Jaa viiden tietueen taulukko taulukoihin, joissa kussakin on kaksi tietuetta.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation

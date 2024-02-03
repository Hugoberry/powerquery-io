---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Palauttaa taulukon, joka sisältää vain ne syötetaulukon rivit, jotka sisältävät virheen vähintään yhdessä solussa. Jos sarakeluettelo määritetään, ainoastaan määritettyjen sarakkeiden solut tarkistetaan virheiden varalta.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Palauttaa taulukon, joka sisältää vain ne syötetaulukon rivit, jotka sisältävät virheen vähintään yhdessä solussa. Jos sarakeluettelo määritetään, ainoastaan määritettyjen sarakkeiden solut tarkistetaan virheiden varalta.


## Examples

### Example #1 
Valitse asiakkaiden nimet, joiden riveillä on virheitä.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations

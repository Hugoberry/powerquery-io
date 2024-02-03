---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Palauttaa taulukon, jonka virheen vähintään yhdessä solussa sisältävät rivit on poistettu syötetaulukosta. Jos sarakeluettelo määritetään, ainoastaan määritettyjen sarakkeiden solut tarkistetaan virheiden varalta.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Palauttaa taulukon, jonka virheen vähintään yhdessä solussa sisältävät rivit on poistettu syötetaulukosta. Jos sarakeluettelo määritetään, ainoastaan määritettyjen sarakkeiden solut tarkistetaan virheiden varalta.


## Examples

### Example #1 
Poista virhearvo ensimmäiseltä riviltä.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations

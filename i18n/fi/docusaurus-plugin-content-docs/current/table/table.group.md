---
title: Table.Group
---

# Table.Group


Ryhmittelee taulukon rivit, joilla on sama avain.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Ryhmittelee `table` rivit määrittämillä `key` avainsarakkeilla. `key` voi olla joko yksittäinen sarakkeen nimi tai sarakenimienluettelo. Kullekin ryhmälle on muodostettu tietue, joka sisältää avainsarakkeet (ja niiden arvot) sekä `aggregatedColumns` määrittämät koostetut sarakkeet. Valinnaisesti myös `groupKind` ja `comparer` voidaan määrittää.  
  
Jos tiedot on jo lajiteltu avainsarakkeiden mukaan, niin `groupKind` GroupKind.Local voidaan antaa. Tämä voi parantaa ryhmittelyn suorituskykyä tietyissä tapauksissa, koska kaikkien niiden rivien, joilla on määritetty avainarvo, oletetaan olevan peräkkäisiä.  
  
Kun ohitat `comparer`, Huomaa, että jos se kohtelee eri avaimia yhtä suurina, rivi voidaan sijoittaa ryhmään, jonka avaimet eroavat toisistaan.  
  
Tämä funktio ei takaa palautettujen rivien määrää.


## Examples

### Example #1
Ryhmittele taulukko lisäämällä koostesarake \[total\], joka sisältää hintojen summan ("each List.Sum(\[price\])").
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation

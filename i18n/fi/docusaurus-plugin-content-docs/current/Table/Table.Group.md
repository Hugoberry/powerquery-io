---
title: Table.Group
---

# Table.Group


## Description

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


## Details

Ryhmittelee <code>table</code> rivit määrittämillä <code>key</code> avainsarakkeilla. <code>key</code> voi olla joko yksittäinen sarakkeen nimi tai sarakenimienluettelo.    Kullekin ryhmälle on muodostettu tietue, joka sisältää avainsarakkeet (ja niiden arvot) sekä  <code>aggregatedColumns</code> määrittämät koostetut sarakkeet.    Valinnaisesti myös <code>groupKind</code> ja <code>comparer</code> voidaan määrittää.<br />    <br />    Jos tiedot on jo lajiteltu avainsarakkeiden mukaan, niin <code>groupKind</code> GroupKind.Local voidaan antaa. Tämä voi parantaa ryhmittelyn suorituskykyä tietyissä tapauksissa,    koska kaikkien niiden rivien, joilla on määritetty avainarvo, oletetaan olevan peräkkäisiä.<br />    <br />    Kun ohitat <code>comparer</code>, Huomaa, että jos se kohtelee eri avaimia yhtä suurina, rivi voidaan sijoittaa ryhmään, jonka avaimet eroavat toisistaan.<br />    <br />    Tämä funktio ei takaa palautettujen rivien määrää.  


## Examples

### Example #1 
Ryhmittele taulukko lisäämällä koostesarake [total], joka sisältää hintojen summan (&#34;each List.Sum([price])&#34;).
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

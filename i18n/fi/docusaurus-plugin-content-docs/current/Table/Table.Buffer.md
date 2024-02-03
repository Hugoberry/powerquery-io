---
title: Table.Buffer
---

# Table.Buffer


## Description

Puskuroi taulukon muistiin eristäen sen ulkosilta muutoksilta arvioinnin aikana.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Puskuroi taulukon muistiin ja eristää sen ulkoisista muutoksista arvioinnin aikana.    Puskurointi on matala. Se pakottaa kaikkien skalaarisolujen arvojen arvioinnin, mutta jättää muut kuin skalaariarvot (tietueet, luettelot, taulukot jne.) ennalleen.    <br />    <br />    Huomaa, että tämän funktion käyttäminen saattaa nopeuttaa kyselyiden suorittamista. Joissakin tapauksissa se voi hidastaa kyselyiden suorittamista, koska kaikkien tietojen lukemisesta ja tallentamisesta muistiin aiheutuu     kustannuksia sekä siitä, että puskurointi estää alavirtaan delegoinnin. Jos tietoja ei tarvitse    puskuroida, mutta haluat vain estää alavirtaan delegoinnin, käytä sen sijaan <code>Table.StopFolding</code>-toimintoa.


## Examples

### Example #1 
Lataa kaikki SQL-taulukon rivit muistiin, jotta kaikki jatkotoiminnot eivät enää pysty tekemään kyselyjä SQL-palvelimelle.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other

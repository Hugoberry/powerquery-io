---
title: Table.Buffer
---

# Table.Buffer


Puskuroi taulukon muistiin eristäen sen ulkosilta muutoksilta arvioinnin aikana.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Puskuroi taulukon muistiin eristäen sen ulkosilta muutoksilta arvioinnin aikana. Puskurointi on pinnallinen. Se pakottaa kaikkien skalaarisoluarvojen arvioinnin, mutta jättää muut kuin skalaariarvot (tietueet, luettelot, taulukot ja niin edelleen) ennalleen.

-   `table`: Taulukko, jonka haluat puskuroida muistiin.
-   `options`: (Valinnainen) Seuraavia asetustietuearvoja voidaan käyttää:
    -   `BufferMode`: Puskuritila, joka kuvaa suoritettavan puskuroinnin tyyppiä. Tämä asetus voi olla joko `BufferMode.Eager` tai `BufferMode.Delayed`.

Tämän funktion käyttäminen saattaa nopeuttaa kyselyiden suorittamista tai ei. Joissakin tapauksissa se voi hidastaa kyselyiden suorittamista lisääntyvien kaikkien tietojen lukemisen ja muistiin tallentamisen kustannusten vuoksi sekä siksi, että puskurointi estää alavirtaan delegoinnin. Jos tietojen ei tarvitse olla puskuroitu, mutta haluat vain estää alavirtaan delegoinnin, käytä sen sijaan `Table.StopFolding`.


## Examples

### Example #1
Lataa kaikki SQL-taulukon rivit muistiin, jotta mitkään jatkotoiminnot eivät enää pysty tekemään kyselyjä SQL-palvelimelle.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other

---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Uvozite podatke iz poizvedbe HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrne seznam tabel iz poizvedbe HDInsight Interactive Query, ki je določena s parametrom <code>database</code> v paremteru <code>server</code> poizvedbe HDInsight Interactive Query. S strežnikom lahko izbirno navedete številko vrat, ki jo ločite z dvopičjem. Navedete lahko izbirni parameter <code>options</code>, s katerim nadzorujete te možnosti:<ul>        <li><code>ConnectionTimeout</code>: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.</li>        <li><code>CommandTimeout</code>: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.</li></ul>Parameter <code>options</code> je naveden kot [možnost1 = vrednost1, možnost2 = vrednost 2 ...].



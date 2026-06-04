---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Uvozite podatke iz poizvedbe HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrne seznam tabel iz poizvedbe HDInsight Interactive Query, ki je določena s parametrom `database` v paremteru `server` poizvedbe HDInsight Interactive Query. S strežnikom lahko izbirno navedete številko vrat, ki jo ločite z dvopičjem. Navedete lahko izbirni parameter `options`, s katerim nadzorujete te možnosti:

-   `ConnectionTimeout`: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.
-   `CommandTimeout`: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.

Parameter `options` je naveden kot \[možnost1 = vrednost1, možnost2 = vrednost 2 ...\].



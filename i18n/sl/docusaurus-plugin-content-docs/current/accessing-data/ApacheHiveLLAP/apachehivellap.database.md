---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Uvozite podatke iz storitve Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Vrne seznam tabel iz storitve Hive LLAP, ki so določene s parametrom `database` v parametru Hive LLAP `server` z uporabo izbranega parametra `protocol`. S strežnikom lahko izbirno navedete številko vrat, ki jo ločite z dvopičjem. Protokol ThriftTransport je vrsta oštevilčenega protokola z vrednostmi"Standardno"in"HTTP". Navedete lahko izbirni parameter `možnosti`, s katerim nadzorujete te možnosti:

-   `ConnectionTimeout`: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.
-   `CommandTimeout`: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.

Parameter `options` je naveden kot \[možnost1 = vrednost1, možnost2 = vrednost2 ...\].



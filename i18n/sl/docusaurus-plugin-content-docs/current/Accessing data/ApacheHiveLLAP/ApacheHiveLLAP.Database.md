---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

Vrne seznam tabel iz storitve Hive LLAP, ki so določene s parametrom <code>database</code> v parametru Hive LLAP <code>server</code> z uporabo izbranega parametra <code>protocol</code>. S strežnikom lahko izbirno navedete številko vrat, ki jo ločite z dvopičjem. Protokol ThriftTransport je vrsta oštevilčenega protokola z vrednostmi "Standardno" in "HTTP". Navedete lahko izbirni parameter <code>možnosti</code>, s katerim nadzorujete te možnosti:<ul>        <li><code>ConnectionTimeout</code>: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.</li>        <li><code>CommandTimeout</code>: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.</li></ul> Parameter <code>options</code> je naveden kot [možnost1 = vrednost1, možnost2 = vrednost2 ...].



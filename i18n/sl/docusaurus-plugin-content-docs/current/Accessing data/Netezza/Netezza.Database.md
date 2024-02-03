---
title: Netezza.Database
---

# Netezza.Database


## Description

Uvozite podatke iz zbirke podatkov storitve IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrne tabelo, v kateri so navedeni projekti, pogledi in shranjene funkcije v zbirki podatkov strežnika Netezza Server <code>database</code> v strežniku <code>server</code>. S strežnikom lahko izbirno navedete vrata, ki jih morate ločiti z dvopičjem. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:<ul>        <li><code>CreateNavigationProperties</code>: logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je "true")</li>        <li><code>HierarchicalNavigation</code>: logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je "false")</li>        <li><code>ConnectionTimeout</code>: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.</li>        <li><code>CommandTimeout</code>: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.</li><li><code>NormalizeDatabaseName</code>: logična vrednost (true/false), ki nastavi, ali je treba ime zbirke podatkov normalizirati v velike črke ali jo razlagati dobesedno (privzeta vrednost je "true").</li></ul>Parameter zapisa je naveden kot [možnost1 = vrednost1, možnost2 = vrednost2 ...].


## Examples

### Example #1 
Prikažite seznam tabel v projektu storitve IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```




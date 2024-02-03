---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

A SparkPost-összekötő által feltárt beépített táblák lekérése a felhasználó által meghatározott számú napra összesített adatokkal. A táblák frissítésekor, illetve a SparkPost API az összekötővel való meghívásakor vegye figyelembe, hogy a SparkPost API szigorú API-kvótával rendelkezik. Ha a SparkPost-kiszolgáló 429-es állapotkódot ad vissza, elérte a kvótát, és néhány pillanatot várnia kell a további hívások előtt. A Number of days (Napok száma) paraméter értékének megadásakor vegye figyelembe, hogy az API csak 6 hónapnyi adatot tárol.



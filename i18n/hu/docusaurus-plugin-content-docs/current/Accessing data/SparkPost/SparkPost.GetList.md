---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

A függvény segítségével az 1-es verziójú SparkPost API által feltárt „Lists” (Listák) végpontok hívhatók meg. A SparkPost API a függvénnyel való meghívásakor vegye figyelembe, hogy a SparkPost API szigorú API-kvótával rendelkezik. Ha a SparkPost-kiszolgáló 429-es állapotkódot ad vissza, elérte a kvótát, és néhány pillanatot várnia kell a további hívások előtt.


## Examples

### Example #1 
Egy egyoszlopos táblát ad vissza, amely az 1-es verziójú SparkPost API egyik „Lists” (Listák) végpontjáról származó adatokkal van feltöltve (részletekért lásd a SparkPost dokumentációját).
```powerquery
Forrás = SparkPost.GetList(metrikák/kampányok)
```

Result: 
```powerquery
Json.Document
```




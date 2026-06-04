---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Adatok importálása HDInsight Interactive Query-lekérdezésből


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

A HDInsight Interactive Query-lekérdezés a(z) `server` HDInsight Interactive Query-kiszolgáló `database` adatbázisa által megadott tábláinak listáját adja vissza. A kiszolgálóval választhatóan egy portszám is megadható, amelyet kettősponttal kell elválasztani. Egy választható `options` paraméter megadásával a következő beállítások szabályozhatók:

-   `ConnectionTimeout`: Ez az időtartam megadja, hogy mennyi ideig várjon a rendszer, mielőtt feladja a kiszolgálókapcsolat létrehozását. Az alapértelmezett érték az illesztőtől függ.
-   `CommandTimeout`: Ez az időtartam azt szabályozza, hogy mennyi ideig futhat a kiszolgálóoldali lekérdezés, mielőtt megszakadna. Az alapértelmezett érték az illesztőtől függ.

Az `options` paraméter a következőképpen adható meg: \[option1 = value1, option2 = value2...\].



---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Adatok importálása Hive LLAP-ből


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

A Hive LLAP a(z) `server` Hive LLAP-kiszolgáló `database` adatbázisa által megadott tábláinak listáját adja vissza a kiválasztott `protocol` protokoll használatával. A kiszolgálóval választhatóan egy portszám is megadható, amelyet kettősponttal kell elválasztani. A Thrift átviteli protokoll egy enumerált típus a következő értékekkel: Standard, HTTP. Egy választható `options` paraméter megadásával a következő beállítások szabályozhatók:

-   `ConnectionTimeout`: Ez az időtartam megadja, hogy mennyi ideig várjon a rendszer, mielőtt feladja a kiszolgálókapcsolat létrehozását. Az alapértelmezett érték az illesztőtől függ.
-   `CommandTimeout`: Ez az időtartam azt szabályozza, hogy mennyi ideig futhat a kiszolgálóoldali lekérdezés, mielőtt megszakadna. Az alapértelmezett érték az illesztőtől függ.

Az `options` paraméter a következőképpen adható meg: \[option1 = value1, option2 = value2...\].



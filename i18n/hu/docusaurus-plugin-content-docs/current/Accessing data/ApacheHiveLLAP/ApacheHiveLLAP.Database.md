---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

A Hive LLAP a(z) <code>server</code> Hive LLAP-kiszolgáló <code>database</code> adatbázisa által megadott tábláinak listáját adja vissza a kiválasztott <code>protocol</code> protokoll használatával. A kiszolgálóval választhatóan egy portszám is megadható, amelyet kettősponttal kell elválasztani. A Thrift átviteli protokoll egy enumerált típus a következő értékekkel: Standard, HTTP. Egy választható <code>options</code> paraméter megadásával a következő beállítások szabályozhatók:<ul>        <li><code>ConnectionTimeout</code>: Ez az időtartam megadja, hogy mennyi ideig várjon a rendszer, mielőtt feladja a kiszolgálókapcsolat létrehozását. Az alapértelmezett érték az illesztőtől függ.</li>        <li><code>CommandTimeout</code>: Ez az időtartam azt szabályozza, hogy mennyi ideig futhat a kiszolgálóoldali lekérdezés, mielőtt megszakadna. Az alapértelmezett érték az illesztőtől függ.</li></ul>Az <code>options</code> paraméter a következőképpen adható meg: [option1 = value1, option2 = value2...].



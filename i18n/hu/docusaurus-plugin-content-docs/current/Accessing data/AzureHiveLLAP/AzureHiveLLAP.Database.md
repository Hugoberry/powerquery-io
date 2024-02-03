---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Adatok importálása HDInsight Interactive Query-lekérdezésből


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

A HDInsight Interactive Query-lekérdezés a(z) <code>server</code> HDInsight Interactive Query-kiszolgáló <code>database</code> adatbázisa által megadott tábláinak listáját adja vissza. A kiszolgálóval választhatóan egy portszám is megadható, amelyet kettősponttal kell elválasztani. Egy választható <code>options</code> paraméter megadásával a következő beállítások szabályozhatók:<ul>        <li><code>ConnectionTimeout</code>: Ez az időtartam megadja, hogy mennyi ideig várjon a rendszer, mielőtt feladja a kiszolgálókapcsolat létrehozását. Az alapértelmezett érték az illesztőtől függ.</li>        <li><code>CommandTimeout</code>: Ez az időtartam azt szabályozza, hogy mennyi ideig futhat a kiszolgálóoldali lekérdezés, mielőtt megszakadna. Az alapértelmezett érték az illesztőtől függ.</li></ul>Az <code>options</code> paraméter a következőképpen adható meg: [option1 = value1, option2 = value2...].



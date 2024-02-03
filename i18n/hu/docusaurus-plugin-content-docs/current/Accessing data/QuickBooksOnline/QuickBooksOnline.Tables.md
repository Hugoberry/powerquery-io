---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Adatok importálása a QuickBooks Online-ból.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Egy olyan táblát ad vissza, amely a QuickBooks Online-ban elérhető táblákat sorolja fel. Megadható egy választható rekordparaméter (<code>options</code>) is a következő beállítások meghatározásához:      <ul>        <li><code>ConnectionTimeout</code>: Az időtartam, amelynek a letelte után a rendszer felhagy a kiszolgálóhoz történő csatlakozásra tett kísérlettel.</li>        <li><code>CommandTimeout</code>: Az időtartam, ameddig a kiszolgálóoldali lekérdezés futhat, mielőtt meg lenne szakítva.</li>      </ul>    A rekordparaméter a következőképpen adható meg: [option1 = value1, option2 = value2...].    



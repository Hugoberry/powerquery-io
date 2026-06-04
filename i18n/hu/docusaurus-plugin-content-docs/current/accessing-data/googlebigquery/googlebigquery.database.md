---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Adatok importálása egy Google BigQuery-adatbázisból.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

A Google BigQuery-ben elérhető projekteket felsoroló táblát ad vissza. Megadható egy `options` opcionális rekordparaméter a következő beállítások szabályozásához:

-   `ConnectionTimeout`: Várakozási időtartam, mielőtt a rendszer feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az ODBC-kapcsolat időtúllépési értéke.
-   `CommandTimeout`: Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna.
-   `BillingProject`: Számlázási projekt azonosító. Az alapértelmezett érték az első elérhető projekt.
-   `UseStorageApi`: Meghatározza, hogy a BigQuery Storage API használatban legyen-e nagy eredményhalmazokhoz. Az alapértelmezett érték igaz a Storage API használatához. Állítsa hamis értékre, ha nem szeretné használni a Storage API-t

A rekordparaméter a következőként van megadva: \[beállítás1 = érték1, beállítás2 = érték2...\].


## Examples

### Example #1
A Google BigQuery-ben elérhető projektek felsorolása
```powerquery
GoogleBigQuery.Database()
```




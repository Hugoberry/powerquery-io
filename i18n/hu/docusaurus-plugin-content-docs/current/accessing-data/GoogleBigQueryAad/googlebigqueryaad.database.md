---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Adatok importálása egy Google BigQuery-adatbázisból a Microsoft Entra ID használatával


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Egy táblát ad vissza, amely felsorolja a Google BigQueryben elérhető projekteket a Microsoft Entra ID használatával a `Számlálási projektazonosítóhoz`. Megadható egy `options` opcionális rekordparaméter a következő beállítások szabályozásához:

-   `ConnectionTimeout`: Várakozási időtartam, mielőtt a rendszer feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az ODBC-kapcsolat időtúllépési értéke.
-   `CommandTimeout`: Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna.
-   `UseStorageApi`: Meghatározza, hogy a BigQuery Storage API használatban legyen-e nagy eredményhalmazokhoz. Az alapértelmezett érték igaz a Storage API használatához. Állítsa hamis értékre, ha nem szeretné használni a Storage API-t
-   `AudienceUri`: Ez a célközönség URI-azonosítója, amelyet az ODBC-illesztőprogram használhat a jogkivonatcsere-kérelmekhez. A mezőnek teljes URI-azonosítónak kell lennie (vagyis //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), ahol a pool\_id a munkaerőkészlet azonosítására szolgáló globálisan egyedi név.

A rekordparaméter a következőként van megadva: \[beállítás1 = érték1, beállítás2 = érték2...\].


## Examples

### Example #1
A Google BigQueryben elérhető projektek felsorolása a Microsoft Entra ID használatával
```powerquery
GoogleBigQueryAad.Database()
```




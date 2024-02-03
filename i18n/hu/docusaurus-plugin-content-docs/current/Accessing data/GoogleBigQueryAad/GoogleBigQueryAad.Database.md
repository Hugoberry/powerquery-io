---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Adatok importálása egy Google BigQuery-adatbázisból az Azure AD használatával


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Egy olyan táblát ad vissza, amely a Google BigQueryben elérhető projekteket sorolja fel a <code>Billing Project ID</code> Azure AD-jének használatával. Megadható egy választható rekordparaméter (<code>options</code>) is a következő beállítások meghatározásához:      <ul>        <li><code>ConnectionTimeout</code>: Az időtartam, amelynek a letelte után a rendszer felhagy a kiszolgálóhoz történő csatlakozásra tett kísérlettel. Az alapértelmezett érték az ODBC-kapcsolat időtúllépésének az értéke.</li>        <li><code>CommandTimeout</code>: Az időtartam, ameddig a kiszolgálóoldali lekérdezés futhat, mielőtt megszakadna.</li>        <li><code>UseStorageApi</code>: Megadja, hogy használja-e BigQuery Storage API-t a nagy eredményhalmazok esetében. Állítsa „hamis” értékre, ha nem kívánja használni a Storage API-t API</li>        <li><code>AudienceUri</code>: Ez a célközönség URI-azonosítója, amelyet az ODBC-illesztőprogram a jogkivonatcserére vonatkozó kérelmeihez használhat. Ennek a mezőnek teljes URI-azonosítónak kell lennie (vagyis //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/aad-provider), ahol a pool_id a munkaerőkészlet azonosítására szolgáló globálisan egyedi név.</li>      </ul>     A rekordparaméter a következőképpen adható meg: [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
A Google BigQuery-ben elérhető projektek felsorolása az Azure AD használatával
```powerquery
GoogleBigQueryAad.Database()
```




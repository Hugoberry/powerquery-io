---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Adatok importálása egy Google BigQuery-adatbázisból.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Egy olyan táblát ad vissza, amely a Google BigQueryben elérhető projekteket sorolja fel. Megadható egy választható rekordparaméter (<code>options</code>) is a következő beállítások meghatározásához      <ul>      <li><code>ConnectionTimeout</code>: Az időtartam, amelynek a letelte után a rendszer felhagy a kiszolgálóhoz történő csatlakozásra tett kísérlettel. Az alapértelmezett érték az ODBC-kapcsolat időtúllépésének az értéke.</li>      <li><code>CommandTimeout</code>: Az időtartam, ameddig a kiszolgálóoldali lekérdezés futhat, mielőtt megszakadna.</li>      <li><code>BillingProject</code>: A számlázási projekt azonosítója. Az alapértelmezett érték az első rendelkezésre álló projekt.</li>      <li><code>UseStorageApi</code>: Megadja, hogy használja-e BigQuery Storage API-t a nagy eredményhalmazok esetében. Állítsa „hamis” értékre, ha nem kívánja használni a Storage API-t API</li>      </ul>      A rekordparaméter a következőképpen adható meg: [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
A Google BigQuery-ben elérhető projektek felsorolása
```powerquery
GoogleBigQuery.Database()
```




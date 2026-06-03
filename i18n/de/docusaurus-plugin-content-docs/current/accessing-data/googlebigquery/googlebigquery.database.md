---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Hiermit werden Daten aus einer Google BigQuery-Datenbank importiert.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Hiermit wird eine Tabelle der verfügbaren Projekte in Google BigQuery zurückgegeben. Ein optionaler Datensatzparameter `options` kann angegeben werden, um die folgenden Optionen zu steuern:

-   `ConnectionTimeout`: Ein Zeitraum, der steuert, wie lange ein Versuch zur Verbindungsherstellung mit dem Server dauern darf, bevor er abgebrochen wird. Der Standardwert ist der ODBC-Verbindungstimeoutwert.
-   `CommandTimeout`: Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird.
-   `BillingProject`: Abrechnungsprojekt-ID. Der Standardwert ist das erste verfügbare Projekt.
-   `UseStorageApi`: Gibt an, ob für große Resultsets die BigQuery-Speicher-API verwendet werden soll. Der Standardwert lautet „true“, was bedeutet, dass die Speicher-API verwendet wird. Legen Sie diesen Wert auf „false“ fest, um Storage-API nicht zu verwenden

Der Datensatzparameter wird als \[option1 = value1, option2 = value2...\] angegeben.


## Examples

### Example #1
Liste der verfügbaren Projekte in Google BigQuery
```powerquery
GoogleBigQuery.Database()
```




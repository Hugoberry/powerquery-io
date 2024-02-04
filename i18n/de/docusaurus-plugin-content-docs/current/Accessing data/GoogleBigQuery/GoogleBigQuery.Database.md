---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Hiermit werden Daten aus einer Google BigQuery-Datenbank importiert.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Hiermit wird eine Tabelle der verfügbaren Projekte in Google BigQuery zurückgegeben. Der optionale Datensatzparameter <code>options</code> kann angegeben werden, um die folgenden Optionen zu steuern:      <ul>        <li><code>ConnectionTimeout</code>: Ein Zeitraum, der steuert, wie lange ein Versuch zur Verbindungsherstellung mit dem Server dauern darf, bevor er abgebrochen wird. Der Standardwert ist der Timeoutwert für die ODBC-Verbindung.</li>        <li><code>CommandTimeout</code>: Eine Zeitraum, der steuert, wie lange eine serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird.</li>        <li><code>BillingProject</code>: Die ID des Abrechnungsprojekts. Der Standardwert ist das erste verfügbare Projekt.</li>        <li><code>UseStorageApi</code>: Gibt an, ob für große Resultsets die BigQuery-Speicher-API verwendet werden soll. Der Standardwert lautet TRUE, was bedeutet, dass die Speicher-API verwendet wird. Legen Sie den Wert auf FALSE fest, damit die Speicher-API nicht verwendet wird.</li>      </ul>    Der Datensatzparameter wird als [option1 = value1, option2 = value2...] angegeben.    


## Examples

### Example #1 
Liste der verfügbaren Projekte in Google BigQuery
```powerquery
GoogleBigQuery.Database()
```




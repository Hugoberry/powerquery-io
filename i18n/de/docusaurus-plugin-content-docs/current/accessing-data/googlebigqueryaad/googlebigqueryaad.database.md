---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Daten mithilfe von Microsoft Entra ID aus einer Google BigQuery-Datenbank importieren


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle zurück, in der die verfügbaren Projekte in Google BigQuery mithilfe von Microsoft Entra ID für `Billing Project ID` aufgelistet sind. Ein optionaler Datensatzparameter `options` kann angegeben werden, um die folgenden Optionen zu steuern:

-   `ConnectionTimeout`: Ein Zeitraum, der steuert, wie lange ein Versuch zur Verbindungsherstellung mit dem Server dauern darf, bevor er abgebrochen wird. Der Standardwert ist der ODBC-Verbindungstimeoutwert.
-   `CommandTimeout`: Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird.
-   `UseStorageApi`: Gibt an, ob für große Resultsets die BigQuery-Speicher-API verwendet werden soll. Der Standardwert lautet „true“, was bedeutet, dass die Speicher-API verwendet wird. Legen Sie diesen Wert auf „false“ fest, um Storage-API nicht zu verwenden
-   `AudienceUri`: Dies ist der Zielgruppen-URI, den der ODBC-Treiber für seine Tokenaustauschanforderungen verwenden kann. Dieses Feld muss ein vollqualifizierter URI (d. h. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) sein, wobei pool\_id ein global eindeutiger Name zum Identifizieren des Mitarbeiterpools ist.

Der Datensatzparameter wird als \[option1 = value1, option2 = value2...\] angegeben.


## Examples

### Example #1
Auflisten der verfügbaren Projekte in Google BigQuery mithilfe von Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```




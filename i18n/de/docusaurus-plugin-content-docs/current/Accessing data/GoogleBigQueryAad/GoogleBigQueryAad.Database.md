---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Daten mithilfe von Azure AD aus einer Google BigQuery-Datenbank importieren


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      Gibt eine Tabelle an, in der die verfügbaren Projekte in Google BigQuery mit Azure AD für <code>Billing Project ID</code> aufgelistet sind. Ein optionaler Datensatzparameter <code>options</code> kann angegeben werden, um die folgenden Optionen zu steuern:      <ul>        <li><code>ConnectionTimeout</code>: Eine Dauer, die steuert, wie lange gewartet werden soll, bevor ein Versuch abgebrochen wird, eine Verbindung mit dem Server herzustellen. Der Standardwert ist ODBC Connection Timeout value.</li>        <li><code>CommandTimeout</code>: Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird.</li>        <li><code>UseStorageApi</code>: Gibt an, ob die BigQuery Storage-API für große Ergebnissets verwendet werden soll. Der Standardwert für die Verwendung der Speicher-API ist "true". Legen Sie diesen Wert auf FALSE fest, um die Speicher-API nicht zu verwenden</li>        <li><code>AudienceUri</code>: Dies ist der Zielgruppen-URI, den der ODBC-Treiber für seine Tokenaustauschanforderungen verwenden kann. Dieses Feld muss ein vollqualifizierter URI sein (d. h. "iam.googleapis.com/locations/global/workforcePools/ $\{pool_id}/providers/azuread"), wobei pool_id ein global eindeutiger Name zum Identifizieren des Mitarbeiterpools ist.</li>      </ul>    Der Datensatzparameter wird als [option1 = value1, option2 = value2...] angegeben.    


## Examples

### Example #1 
Auflisten der verfügbaren Projekte in Google BigQuery mithilfe von Azure AD
```powerquery
GoogleBigQueryAad.Database()
```




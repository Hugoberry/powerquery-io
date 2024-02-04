---
title: Vertica.Database
---

# Vertica.Database


## Description

Hiermit importieren Sie Daten aus Vertica.


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Gibt eine Tabelle mit Schemas zurück, die auf dem durch den Parameter <code>server</code> angegebenen Server in der durch den Parameter <code>database</code> angegebenen Datenbank verfügbar sind.Ein optionaler Datensatzparameter <code>options</code> kann bereitgestellt werden, um weitere Eigenschaften anzugeben. Der Datensatz kann die folgenden Felder enthalten:<ul>    <li><code>ConnectionTimeout</code>: eine Dauer zum Steuern der Wartezeit, nach der ein Versuch zur Verbindungsherstellung mit dem Server aufgegeben wird. Der Standardwert ist treiberabhängig.</li>    <li><code>CommandTimeout</code>: eine Dauer zum Steuern der zulässigen Ausführungszeit einer serverseitigen Abfrage, nach der die Abfrage abgebrochen wird. Der Standardwert ist treiberabhängig.</li></ul>


## Examples

### Example #1 
Tabellen in Vertica auflisten
```powerquery

```




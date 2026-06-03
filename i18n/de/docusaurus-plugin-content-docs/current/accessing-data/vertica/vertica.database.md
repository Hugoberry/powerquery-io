---
title: Vertica.Database
---

# Vertica.Database


Hiermit importieren Sie Daten aus Vertica.


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle mit Schemas zurück, die auf dem durch den Parameter `server` angegebenen Server in der durch den Parameter `database` angegebenen Datenbank verfügbar sind. Ein optionaler Datensatzparameter `options` kann bereitgestellt werden, um weitere Eigenschaften anzugeben. Der Datensatz kann die folgenden Felder enthalten:

-   `ConnectionTimeout`: eine Dauer zum Steuern der Wartezeit, nach der ein Versuch zur Verbindungsherstellung mit dem Server aufgegeben wird. Der Standardwert ist treiberabhängig.
-   `CommandTimeout`: eine Dauer zum Steuern der zulässigen Ausführungszeit einer serverseitigen Abfrage, nach der die Abfrage abgebrochen wird. Der Standardwert ist treiberabhängig.


## Examples

### Example #1
Tabellen in Vertica auflisten
```powerquery

```




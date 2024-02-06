---
title: Snowflake.Databases
---

# Snowflake.Databases


Importieren Sie Daten aus einem Snowflake Computing-Warehouse.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Hiermit wird eine Tabelle zurückgegeben, in der die Tabellen im Snowflake Computing-<code>Warehouse</code> auf "<code>server</code>" aufgeführt werden. Der optionale Datensatzparameter <code>options</code> kann angegeben werden, um die folgenden Optionen zu steuern:<ul><li><code>Role</code>: Ein Textwert, der als Rollenname für die Verbindung verwendet werden soll.</li><li><code>CreateNavigationProperties</code>: Ein logischer Wert (TRUE/FALSE), der festlegt, ob für die zurückgegebenen Werte Navigationseigenschaften generiert werden sollen (Standardwert: TRUE).</li><li><code>ConnectionTimeout</code>: Die Anzahl von Sekunden, die auf Netzwerkantworten von Snowflake gewartet wird.</li><li><code>CommandTimeout</code>: Die Anzahl von Sekunden, die auf die Ausführung einer Abfrage gewartet wird.</li></ul>    


## Examples

### Example #1 
Listen Sie die Tabellen in einem Snowflake-Warehouse auf.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```




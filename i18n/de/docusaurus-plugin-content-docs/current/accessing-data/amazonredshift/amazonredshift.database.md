---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Hiermit importieren Sie Daten aus einer Amazon Redshift-Datenbank.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle zurück, in der die Tabellen auf dem Amazon Redshift-Cluster `server` in der Datenbank `database` aufgelistet sind. Ein optionaler Datensatzparameter `options` kann angegeben werden, um die folgenden Optionen zu steuern:

-   `Provider Name`: Ein Textwert, der als Anbietername für die Verbindung verwendet wird. Dieser wird bei Verwendung der Microsoft-Authentifizierung verwendet.
-   `Batch Size`: Die Anzahl von Zeilen, die in einem einzigen Aufruf an den Server abgerufen werden.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```




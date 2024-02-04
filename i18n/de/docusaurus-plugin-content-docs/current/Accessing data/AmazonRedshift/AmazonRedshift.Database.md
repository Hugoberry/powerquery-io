---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Hiermit importieren Sie Daten aus einer Amazon Redshift-Datenbank.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Gibt eine Tabelle zurück, in der die Tabellen auf dem Amazon Redshift Cluster <code>Server aufgelistet</code> in der Datenbank <code>Datenbank</code> sind.  Ein optionaler Datensatzparameter ( <code>Optionen</code> ) kann angegeben werden, um die folgenden Optionen zu steuern:<ul><li><code>Anbietername</code>: Ein Textwert, der als Anbietername für die Verbindung verwendet werden soll. Wird verwendet, wenn Microsoft Authentication.</li><li><code>Batchgröße</code> verwendet wird: die Anzahl von Zeilen, die in einem einzigen Aufruf an den Server abgerufen werden.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```




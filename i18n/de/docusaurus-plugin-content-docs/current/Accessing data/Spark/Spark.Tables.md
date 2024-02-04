---
title: Spark.Tables
---

# Spark.Tables


## Description

Gibt eine Tabellenauflistung der Tabellen auf dem angegebenen Spark-Cluster zurück.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Gibt eine Tabellenauflistung der Tabellen auf dem angegebenen Spark-Cluster <code>host</code> mithilfe von <code>protocol</code> zurück.  Die folgenden Protokolle sind gültig:Nr. [validProtocols]


## Examples

### Example #1 
Liste der Tabellen in einer Azure Spark-Instanz.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```




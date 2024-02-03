---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Retorna una taula que enumera les taules del clúster de l&#39;Spark especificat.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Retorna una taula que enumera les taules del clúster de l'Spark <code>host</code> amb el <code>protocol</code>.  Els protocols vàlids són:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Retorna una taula que enumera les taules del clúster de l&#39;Spark especificat.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




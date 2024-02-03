---
title: Spark.Tables
---

# Spark.Tables


## Description

Tiek atgriezta tabula, kurā ir ietvertas Spark klasterī esošās tabulas.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Tiek atgriezta tabula, kurā ir ietvertas parametrā <code>host</code> norādītajā Spark klasterī ietvertās tabulas, izmantojot parametrā <code>protocol</code> norādīto protokolu. Derīgie protokoli ir:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Skatīt Azure Spark instancē esošās tabulas.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```




---
title: Spark.Tables
---

# Spark.Tables


Tiek atgriezta tabula, kurā ir ietvertas Spark klasterī esošās tabulas.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta tabula, kurā ir ietvertas parametrā `host` norādītajā Spark klasterī ietvertās tabulas, izmantojot parametrā `protocol` norādīto protokolu. Derīgie protokoli ir: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Skatīt Azure Spark instancē esošās tabulas.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```




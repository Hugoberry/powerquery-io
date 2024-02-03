---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Tiek atgriezta tabula, kurā ir ietvertas Spark klasterī esošās tabulas.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Tiek atgriezta tabula, kurā ir ietvertas parametrā <code>host</code> norādītajā Spark klasterī ietvertās tabulas, izmantojot parametrā <code>protocol</code> norādīto protokolu. Derīgie protokoli ir:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Tiek atgriezta tabula, kurā ir ietvertas Spark klasterī esošās tabulas.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




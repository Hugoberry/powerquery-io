---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Vrne tabelo, v kateri so navedene tabele v določeni gruči Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, v kateri so navedene tabele v določeni gruči Spark `host` in pri tem uporabi `protocol`. Veljavni protokoli so: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Vrne tabelo, v kateri so navedene tabele v določeni gruči Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




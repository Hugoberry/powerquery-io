---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Vrne tabelo, v kateri so navedene tabele v določeni gruči Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Vrne tabelo, v kateri so navedene tabele v določeni gruči Spark <code>host</code> in pri tem uporabi <code>protocol</code>.  Veljavni protokoli so:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Vrne tabelo, v kateri so navedene tabele v določeni gruči Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




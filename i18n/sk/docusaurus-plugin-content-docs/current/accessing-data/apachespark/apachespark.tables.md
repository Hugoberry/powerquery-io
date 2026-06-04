---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Vráti tabuľku, ktorá uvádza tabuľky zadané v klastri Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku, ktorá uvádza tabuľky v hostiteľovi `host` klastra Spark, použitím protokolu `protocol`. Platné protokoly sú: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Vráti tabuľku, ktorá uvádza tabuľky zadané v klastri Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




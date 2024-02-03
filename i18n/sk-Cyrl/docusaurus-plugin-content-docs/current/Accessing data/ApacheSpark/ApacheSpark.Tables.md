---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Vráti tabuľku, ktorá uvádza tabuľky zadané v klastri Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Vráti tabuľku, ktorá uvádza tabuľky v hostiteľovi <code>host</code> klastra Spark, použitím protokolu <code>protocol</code>. Platné protokoly sú:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Vráti tabuľku, ktorá uvádza tabuľky zadané v klastri Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




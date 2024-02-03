---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Pateikiama lentelė, kurioje išvardijamos nurodyto „Spark“ blokinio lentelės.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Pateikiama lentelė, kurioje išvardijamos „Spark“ blokinio <code>host</code> lentelės, naudojančios <code>protocol</code>.  Tinkami protokolai:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Pateikiama lentelė, kurioje išvardijamos nurodyto „Spark“ blokinio lentelės.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




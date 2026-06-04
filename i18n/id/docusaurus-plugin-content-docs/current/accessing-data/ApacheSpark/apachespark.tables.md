---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Menghasilkan tabel yang mencantumkan tabel pada kluster Spark yang ditentukan.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel yang mencantumkan tabel pada kluster Spark `host` menggunakan `protokol`. Protokol yang valid adalah: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Menghasilkan tabel yang mencantumkan tabel pada kluster Spark yang ditentukan.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




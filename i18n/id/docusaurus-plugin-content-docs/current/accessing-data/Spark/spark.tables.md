---
title: Spark.Tables
---

# Spark.Tables


Menghasilkan tabel yang mencantumkan tabel pada kluster Spark yang ditentukan.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel yang mencantumkan tabel pada kluster Spark `host` menggunakan `protokol`. Protokol yang valid adalah: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Cantumkan tabel dalam instansi Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```




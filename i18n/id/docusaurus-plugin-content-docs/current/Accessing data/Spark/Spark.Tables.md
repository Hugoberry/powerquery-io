---
title: Spark.Tables
---

# Spark.Tables


## Description

Menghasilkan tabel yang mencantumkan tabel pada kluster Spark yang ditentukan.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Menghasilkan tabel yang mencantumkan tabel pada kluster Spark <code>host</code> menggunakan <code>protokol</code>.  Protokol yang valid adalah:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Cantumkan tabel dalam instansi Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```




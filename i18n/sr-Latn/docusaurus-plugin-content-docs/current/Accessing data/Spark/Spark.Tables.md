---
title: Spark.Tables
---

# Spark.Tables


## Description

Returns a table listing the tables on the specified Spark cluster.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Returns a table listing the tables on the Spark cluster <code>host</code> using <code>protocol</code>.  Valid protocols are:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
List the tables in an Azure Spark instance.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```




---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Returns a table listing the tables on the specified Spark cluster.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Returns a table listing the tables on the Spark cluster <code>host</code> using <code>protocol</code>.  Valid protocols are:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Returns a table listing the tables on the specified Spark cluster.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




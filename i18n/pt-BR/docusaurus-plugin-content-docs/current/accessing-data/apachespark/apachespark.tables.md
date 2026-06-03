---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Retorna uma tabela que lista as tabelas do cluster do Spark especificado.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela que lista as tabelas do cluster `host` do Spark usando `protocol`. Os protocolos válidos são: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Retorna uma tabela que lista as tabelas do cluster do Spark especificado.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




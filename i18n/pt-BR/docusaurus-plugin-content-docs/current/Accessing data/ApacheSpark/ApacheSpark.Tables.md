---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Retorna uma tabela que lista as tabelas do cluster do Spark especificado.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Retorna uma tabela que lista as tabelas do cluster <code>host</code> do Spark usando <code>protocol</code>. Os protocolos válidos são:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Retorna uma tabela que lista as tabelas do cluster do Spark especificado.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




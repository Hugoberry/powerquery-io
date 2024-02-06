---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Devolve uma tabela que lista as tabelas existentes no cluster Spark especificado.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela que lista as tabelas existentes no <code>host</code> do cluster Spark com <code>protocol</code>. Os protocolos válidos são:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Devolve uma tabela que lista as tabelas existentes no cluster Spark especificado.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




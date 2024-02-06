---
title: Spark.Tables
---

# Spark.Tables


Devolve uma tabela que lista as tabelas existentes no cluster Spark especificado.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela que lista as tabelas existentes no <code>host</code> do cluster Spark com <code>protocol</code>. Os protocolos válidos são:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Listar as tabelas numa instância do Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```




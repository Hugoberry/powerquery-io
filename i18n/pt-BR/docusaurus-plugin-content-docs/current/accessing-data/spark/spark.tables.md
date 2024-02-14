---
title: Spark.Tables
---

# Spark.Tables


Retorna uma tabela que lista as tabelas do cluster do Spark especificado.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela que lista as tabelas do cluster <code>host</code> do Spark usando <code>protocol</code>. Os protocolos válidos são:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Lista as tabelas em uma instância do Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```




---
title: Spark.Tables
---

# Spark.Tables


## Description

지정된 Spark 클러스터에 있는 테이블을 나열하는 테이블을 반환합니다.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

<code>protocol</code>을 사용하여 Spark 클러스터 <code>host</code>에 있는 테이블을 나열하는 테이블을 반환합니다. 올바른 프로토콜은 다음과 같습니다.SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Azure Spark 인스턴스의 테이블을 나열합니다.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```




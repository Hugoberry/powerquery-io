---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

지정된 Spark 클러스터에 있는 테이블을 나열하는 테이블을 반환합니다.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

<code>protocol</code>을 사용하여 Spark 클러스터 <code>host</code>에 있는 테이블을 나열하는 테이블을 반환합니다. 올바른 프로토콜은 다음과 같습니다.SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
지정된 Spark 클러스터에 있는 테이블을 나열하는 테이블을 반환합니다.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```




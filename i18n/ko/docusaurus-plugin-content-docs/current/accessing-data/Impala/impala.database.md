---
title: Impala.Database
---

# Impala.Database


Impala 클러스터에서 데이터를 가져옵니다.


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Impala 클러스터 `server`에서 데이터를 가져옵니다. 포트가 지정되지 않은 경우 기본 포트로 21050이 사용됩니다.


## Examples

### Example #1
Impala 클러스터에 테이블을 나열합니다.
```powerquery
Impala.Database("localhost:21050")
```




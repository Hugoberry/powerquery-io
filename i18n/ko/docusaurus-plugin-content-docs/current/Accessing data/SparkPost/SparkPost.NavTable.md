---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

사용자가 지정한 일수 동안 집계된 데이터와 함께 SparkPost 커넥터를 통해 노출되는 기본 제공 테이블을 검색합니다. 이러한 테이블을 새로 고치거나 이 커넥터로 SparkPost API를 호출하는 경우 SparkPost API에는 엄격한 API 속도 제한이 있음을 염두에 둡니다. SparkPost 서버에서 429 상태 코드가 반환되는 경우 속도 제한에 도달하여 추가 호출을 수행하려면 잠시 기다려야 합니다. Number of days 매개 변수 값을 선택할 때는 API에는 6개월 분량의 데이터만 저장된다는 점에 유의합니다.



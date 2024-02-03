---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

SparkPost API v1의 사용 가능 메트릭 테이블을 반환합니다.


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Details

이 함수는 SparkPost API v1의 특정 "Metrics" 엔드포인트에서 데이터를 검색하는 데 사용할 수 있습니다. 이러한 테이블을 새로 고치거나 이 커넥터로 SparkPost API를 호출하는 경우 SparkPost API에는 엄격한 API 속도 제한이 있음을 염두에 둡니다. SparkPost 서버에서 429 상태 코드가 반환되는 경우 속도 제한에 도달하여 추가 호출을 수행하려면 잠시 기다려야 합니다. Number of days 매개 변수 값을 선택할 때는 API에는 6개월 분량의 데이터만 저장된다는 점에 유의합니다.


## Examples

### Example #1 
지난 3일 동안 집계된 모든 campaign_id에 대한 count_sent and count_rejected 배달 메트릭을 검색합니다. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
테이블
```




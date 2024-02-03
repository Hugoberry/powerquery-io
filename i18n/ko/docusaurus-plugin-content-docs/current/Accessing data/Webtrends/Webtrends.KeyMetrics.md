---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

주요 Webtrends 메트릭이 있는 테이블을 반환합니다.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Webtrends KeyMetrics 엔드포인트를 호출하고 모든 데이터를 테이블로 반환합니다.


## Examples

### Example #1 
최근 30일 동안의 테넌트 98765에 대한 주요 메트릭 테이블을 가져옵니다.
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
주요 메트릭 테이블
```




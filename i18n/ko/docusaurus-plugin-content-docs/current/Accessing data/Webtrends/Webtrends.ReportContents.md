---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Webtrends의 보고서 콘텐츠가 있는 테이블을 반환합니다.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

지정된 Webtrends 보고 엔드포인트를 호출하고 모든 데이터를 테이블로 반환합니다.


## Examples

### Example #1 
최근 30일 동안의 데이터에 대한 Webtrends 방문자 보고서 엔드포인트를 호출합니다.
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
방문자 데이터 테이블
```




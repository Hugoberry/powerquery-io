---
title: Marketo.Activities
---

# Marketo.Activities


## Description

잠재 고객 활동이 있는 테이블을 반환합니다.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

<code>url</code>/rest/v1/activities.json에서 Marketo REST API 엔드포인트를 호출합니다. <code>startTime</code> 이후 발생한 목록 <code>activityIds</code>의 모든 활동이 반환됩니다.


## Examples

### Example #1 
2015년 11월 1일 이후의 &#34;웹 페이지 방문&#34; 활동에 대한 테이블을 가져옵니다.
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
11월 1일 이후의 모든 "웹 페이지 방문" 활동에 대한 세부 정보가 있는 테이블
```




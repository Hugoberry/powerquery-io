---
title: List.Average
---

# List.Average


## Description

값의 평균을 반환합니다. number, date, datetime, datetimezone 및 duration 값에 사용할 수 있습니다.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

<code>list</code> 목록에 있는 항목의 평균 값을 반환합니다. 결과의 데이터 형식은 목록에 있는 값의 데이터 형식과 동일합니다. number, date, time, datetime, datetimezone 및 duration 값에만 사용할 수 있습니다.    목록이 비어 있으면 Null이 반환됩니다.


## Examples

### Example #1 
숫자 목록 &lt;code&gt;\{3, 4, 6}&lt;/code&gt;의 평균을 구합니다.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
날짜 값 2011년 1월 1일, 2011년 1월 2일 및 2011년 1월 3일의 평균을 구합니다.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages

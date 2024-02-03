---
title: List.Median
---

# List.Median


## Description

목록의 중앙값을 반환합니다.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

목록 <code>list</code>의 중앙 항목을 반환합니다. 이 함수는 목록에 <code>null</code>이 아닌 값이 없으면 <code>null</code>을 반환합니다.    항목 수가 짝수이면 함수는 목록이 날짜/시간, 기간, 숫자 또는 시간으로만 구성되어 있는 경우를 제외하고 두 개의 중앙 항목 중 더 작은 항목을 선택하며, 이 경우 두 항목의 평균이 반환됩니다.


## Examples

### Example #1 
&lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; 목록의 중앙값을 찾습니다.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering

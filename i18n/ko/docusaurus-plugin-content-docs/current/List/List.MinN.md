---
title: List.MinN
---

# List.MinN


## Description

목록의 최소값을 반환합니다. 반환할 값의 수나 필터링 조건을 지정할 수 있습니다.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

<code>list</code> 목록의 최소값을 반환합니다.    <code>countOrCondition</code> 매개 변수는 반환할 값의 수나 필터링 조건을 지정합니다. 선택적 매개 변수 <code>comparisonCriteria</code>은(는) 목록의 값을 비교할 방법을 지정합니다. <ul>        <li> <code>list</code>: 값 목록입니다.</li>        <li> <code>countOrCondition</code>: 숫자가 지정된 경우 최대 <code>countOrCondition</code>개의 항목이 오름차순으로 포함된 목록이 반환됩니다. 조건이 지정된 경우에는 처음부터 시작해서 해당 조건을 충족하는 항목의 목록이 반환됩니다. 한 항목에서 조건이 충족되지 않으면 이후 항목은 더 이상 고려되지 않습니다. 이 매개 변수가 Null이면 목록에서 가장 작은 단일 값이 반환됩니다.</li><li><code>comparisonCriteria</code>: <i>[옵션]</i> 선택적 <code>comparisonCriteria</code> 값을 지정하여 목록의 항목을 비교할 방법을 결정할 수 있습니다. 이 매개 변수가 Null이면 기본 비교자가 사용됩니다. </li></ul>


## Examples

### Example #1 
&lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt; 목록에서 가장 작은 5개의 값을 찾습니다.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
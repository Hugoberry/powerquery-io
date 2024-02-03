---
title: Table.MinN
---

# Table.MinN


## Description

지정된 조건을 사용하여 가장 작은 행을 반환합니다.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

<code>comparisonCriteria</code>이(가) 지정된 경우 <code>table</code>의 가장 작은 행을 반환합니다. 행이 정렬된 후에 <code>countOrCondition</code> 매개 변수를 지정하여 결과를 추가적으로 필터링해야 합니다. 정렬 알고리즘은 고정된 정렬 결과를 생성할 수 없습니다. <code>countOrCondition</code> 매개 변수는 여러 형식을 사용할 수 있습니다.    <ul>        <li> 숫자가 지정된 경우 최대 <code>countOrCondition</code>개의 항목이 오름차순으로 포함된 목록이 반환됩니다. </li>        <li> 조건이 지정된 경우에는 처음부터 시작해서 해당 조건을 충족하는 항목의 목록이 반환됩니다. 한 항목에서 조건이 충족되지 않으면 이후 항목은 더 이상 고려되지 않습니다. </li>  </ul>


## Examples

### Example #1 
테이블에서 [a] &lt; 3 조건을 사용하여 [a] 열의 값이 가장 작은 행을 찾습니다. 행은 필터가 적용되기 전에 정렬됩니다.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
테이블에서 [a] &lt; 0 조건을 사용하여 [b] 열의 값이 가장 작은 행을 찾습니다. 행은 필터가 적용되기 전에 정렬됩니다.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering

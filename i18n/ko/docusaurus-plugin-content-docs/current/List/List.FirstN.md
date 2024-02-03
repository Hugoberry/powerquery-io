---
title: List.FirstN
---

# List.FirstN


## Description

반환할 항목 수나 한정 조건을 지정하여 목록의 처음 몇 개 항목으로 구성된 집합을 반환합니다.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>항목 수가 지정된 경우 해당 개수까지의 항목이 반환됩니다. </li>  <li>조건이 지정된 경우 처음부터 시작해서 해당 조건을 충족하는 모든 항목이 반환됩니다. 한 항목에서 조건이 충족되지 않으면 이후 항목은 더 이상 고려되지 않습니다. </li> </ul>


## Examples

### Example #1 
\{3, 4, 5, -1, 7, 8, 2} 목록에서 0보다 큰 초기 값을 찾습니다.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection

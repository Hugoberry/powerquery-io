---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

목록의 끝부터 지정된 수만큼의 요소를 제거한 목록을 반환합니다.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

목록의 끝 <code>list</code>부터 마지막 <code>countOrCondition</code>개 요소를 제거한 목록을 반환합니다. <code>list</code>에 <code>countOrCondition</code>보다 적은 요소가 있으면 빈 목록이 반환됩니다. <ul> <li>항목 수가 지정된 경우 해당 개수까지의 항목을 제거합니다. </li> <li>조건이 지정된 경우 반환되는 목록은 <code>list</code>에서 맨 아래에서부터 해당 조건을 충족하는 첫 번째 요소로 끝납니다. 한 항목에서 조건이 충족되지 않으면 이후 항목은 더 이상 고려되지 않습니다. </li> <li>이 매개 변수가 Null이면 항목이 하나만 제거됩니다. </li> </ul>


## Examples

### Example #1 
\{1, 2, 3, 4, 5}에서 마지막 3개의 숫자를 제외한 목록을 만듭니다.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
\{5, 4, 2, 6, 4}에서 3보다 작은 숫자로 끝나는 목록을 만듭니다.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions

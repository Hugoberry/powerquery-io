---
title: List.LastN
---

# List.LastN


## Description

목록의 마지막 값을 반환합니다. 선택적으로 반환할 값의 수나 한정 조건을 지정할 수 있습니다.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

<code>list</code> 목록의 마지막 항목을 반환합니다. 목록이 비어 있으면 예외가 발생합니다. 이 함수는 선택적 매개 변수인 <code>countOrCondition</code>을(를) 사용하여 여러 항목 수집 또는 항목 필터링을 지원합니다. <code>countOrCondition</code>은(는) 다음 세 가지 방법으로 지정할 수 있습니다. <ul>  <li>항목 수가 지정된 경우 해당 개수까지의 항목이 반환됩니다. </li>  <li>조건이 지정된 경우 목록의 끝에서 시작해서 해당 조건을 충족하는 모든 항목이 반환됩니다. 한 항목에서 조건이 충족되지 않으면 이후 항목은 더 이상 고려되지 않습니다. </li>  <li>이 매개 변수가 Null이면 목록의 마지막 항목이 반환됩니다.</li> </ul>


## Examples

### Example #1 
\{3, 4, 5, -1, 7, 8, 2} 목록의 마지막 값을 찾습니다.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
\{3, 4, 5, -1, 7, 8, 2} 목록에서 0보다 큰 마지막 값을 찾습니다.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection

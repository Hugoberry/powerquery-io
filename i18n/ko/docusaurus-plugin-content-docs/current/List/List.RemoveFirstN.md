---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

목록의 처음부터 지정된 수만큼의 요소를 건너뛴 목록을 반환합니다.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

<code>list</code> 목록의 첫 번째 요소를 제거할 목록을 반환합니다. <code>list</code>이(가) 빈 목록이면 빈 목록이 반환됩니다.이 함수는 선택적 매개 변수인 <code>countOrCondition</code>을(를) 사용하여 다음과 같은 여러 값 제거를 지원합니다. <ul> <li>항목 수가 지정된 경우 해당 개수까지의 항목을 제거합니다. </li> <li>조건이 지정된 경우 반환되는 목록은 <code>list</code>에서 해당 조건을 충족하는 첫 번째 요소로 시작합니다. 한 항목에서 조건이 충족되지 않으면 이후 항목은 더 이상 고려되지 않습니다. </li> <li>이 매개 변수가 Null이면 기본 동작이 적용됩니다. </li> </ul>


## Examples

### Example #1 
\{1, 2, 3, 4, 5}에서 처음 3개의 숫자를 제외한 목록을 만듭니다.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
\{5, 4, 2, 6, 1}에서 3보다 작은 숫자로 시작되는 목록을 만듭니다.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions

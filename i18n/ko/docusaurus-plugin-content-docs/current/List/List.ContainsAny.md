---
title: List.ContainsAny
---

# List.ContainsAny


## Description

목록에 다른 목록의 값이 하나라도 포함되어 있는지 여부를 나타냅니다.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

<code>list</code> 목록에 다른 목록 <code>values</code>의 값이 하나라도 포함되어 있는지 여부를 나타냅니다.        목록에 값이 있으면 true를 반환하고, 그렇지 않으면 false를 반환합니다. 선택적 수식 조건 값인 <code>equationCriteria</code>을(를) 지정하여 같음 테스트를 제어할 수 있습니다. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} 목록에 3 또는 9가 포함되어 있는지 확인합니다.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3, 4, 5} 목록에 6 또는 7이 포함되어 있는지 확인합니다.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions

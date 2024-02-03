---
title: List.Contains
---

# List.Contains


## Description

목록에 값이 포함되어 있는지 여부를 나타냅니다.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

<code>list</code> 목록에 <code>value</code> 값이 포함되어 있는지 여부를 나타냅니다.    목록에 값이 있으면 true를 반환하고, 그렇지 않으면 false를 반환합니다. 선택적 수식 조건 값인 <code>equationCriteria</code>을(를) 지정하여 같음 테스트를 제어할 수 있습니다. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} 목록에 3이 포함되어 있는지 확인합니다.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3, 4, 5} 목록에 6이 포함되어 있는지 확인합니다.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions

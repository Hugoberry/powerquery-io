---
title: List.Difference
---

# List.Difference


## Description

지정된 두 목록의 차이를 반환합니다.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

<code>list1</code> 목록의 항목 중 <code>list2</code> 목록에 나타나지 않는 항목을 반환합니다. 중복 값은 지원되지 않습니다.    선택적 수식 조건 값인 <code>equationCriteria</code>을(를) 지정하여 같음 테스트를 제어할 수 있습니다. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} 목록의 항목 중 \{4, 5, 3} 목록에 나타나지 않는 항목을 찾습니다.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
\{1, 2} 목록의 항목 중 \{1, 2, 3} 목록에 나타나지 않는 항목을 찾습니다.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations

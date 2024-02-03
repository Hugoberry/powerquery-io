---
title: List.Distinct
---

# List.Distinct


## Description

중복 값이 제거된 값 목록을 반환합니다.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

<code>list</code>의 모든 값을 중복 값은 제거한 채로 포함하는 목록을 반환합니다. 목록이 비어 있으면 결과는 빈 목록이 됩니다.


## Examples

### Example #1 
\{1, 1, 2, 3, 3, 3} 목록에서 중복 항목을 제거합니다.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection

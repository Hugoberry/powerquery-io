---
title: List.IsDistinct
---

# List.IsDistinct


## Description

목록에 중복 항목이 있는지 여부를 나타냅니다.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

<code>list</code> 목록에 중복 항목이 있는지 여부를 나타내는 논리 값을 반환합니다. 목록이 고유하면 <code>true</code>이고, 중복 값이 있으면 <code>false</code>입니다. 


## Examples

### Example #1 
\{1, 2, 3} 목록이 고유한지, 즉 중복 항목이 없는지 확인합니다.
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3, 3} 목록이 고유한지, 즉 중복 항목이 없는지 확인합니다.
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection

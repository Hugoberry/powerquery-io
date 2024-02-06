---
title: List.Repeat
---

# List.Repeat


傳回清單，此清單是將原始清單重複計數 (count) 次。


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

傳回清單，此清單是將原始清單 <code>list</code> 重複 <code>count</code> 次。


## Examples

### Example #1 
建立將 \{1, 2} 重複 3 次的清單。
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions

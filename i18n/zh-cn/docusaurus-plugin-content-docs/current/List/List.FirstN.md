---
title: List.FirstN
---

# List.FirstN


## Description

通过指定要返回的项数或限定条件来返回列表中的第一组项。


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>如果指定一个数，则最多返回这么多项。</li>  <li>如果指定一个条件，则返回最初满足该条件的所有项。一旦某个项不满足该条件，则不再考虑其他项。</li> </ul>


## Examples

### Example #1 
在列表 \{3, 4, 5, -1, 7, 8, 2} 中查找大于 0 的初始值。
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection

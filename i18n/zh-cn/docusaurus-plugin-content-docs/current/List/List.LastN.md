---
title: List.LastN
---

# List.LastN


## Description

返回列表中的最后一个值。 (可选)可以指定要返回的值数或限定条件。


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

返回列表 <code>list</code> 的最后一项。如果列表为空，将引发异常。 此函数采用一个可选参数 <code>countOrCondition</code> 来支持收集多个项或筛选项。可以通过以下三种方式指定 <code>countOrCondition</code>: <ul>  <li>如果指定一个数，则最多返回这么多项。</li>  <li>如果指定一个条件，则返回最初满足该条件的所有项，从列表末尾开始。一旦某个项不满足该条件，则不再考虑其他项。</li>  <li>如果此参数为 null，则返回列表中的最后一项。</li> </ul>


## Examples

### Example #1 
查找列表 \{3, 4, 5, -1, 7, 8, 2} 中的最后一个值。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
查找列表 \{3, 4, 5, -1, 7, 8, 2} 中大于 0 的最后一个值。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection

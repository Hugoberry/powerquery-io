---
title: List.Skip
---

# List.Skip


## Description

返回一个列表，它在列表开头跳过指定数目的元素。


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

返回跳过列表 <code>list</code> 的第一个元素的列表。如果 <code>list</code> 为空列表，则返回空列表。此函数取一个可选参数 <code>countOrCondition</code> 来支持跳过以下所列的多个值。 <ul> <li>如果指定一个数，则最多跳过这么多项。</li> <li>如果指定条件，则返回的列表以 <code>list</code> 中满足条件的第一个元素开头。一旦某个项不满足该条件，则不再考虑其他项。</li> <li>如果此参数为 null，将采用默认行为。</li> </ul>


## Examples

### Example #1 
从 \{1, 2, 3, 4, 5} 创建不带前 3 个数的列表。
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
从 \{5, 4, 2, 6, 1} 创建一个列表，它以小于 3 的数开头。
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection

---
title: List.RemoveLastN
---

# List.RemoveLastN


返回一个列表，它从列表末尾删除指定数目的元素。


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

返回一个列表，它从列表 <code>list</code> 末尾删除最后 <code>countOrCondition</code> 个元素。如果 <code>list</code> 中的元素少于 <code>countOrCondition</code> 个，则返回空列表。 <ul> <li>如果指定一个数字，则最多删除这么多项。</li> <li>如果指定条件，则返回的列表以 <code>list</code> 中满足条件的倒数第一个元素结尾。一旦某个项不满足该条件，则不再考虑其他项。</li> <li>如果此参数为 null，则仅删除一项。</li> </ul>


## Examples

### Example #1 
从 \{1, 2, 3, 4, 5} 创建不带后 3 个数的列表。
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
从 \{5, 4, 2, 6, 4} 创建一个列表，它以小于 3 的数结尾。
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions

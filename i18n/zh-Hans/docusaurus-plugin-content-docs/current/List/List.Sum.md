---
title: List.Sum
---

# List.Sum


返回列表中的项之和。


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

返回列表 <code>list</code> 中所有非 null 值的总和。 如果列表中没有非 null 值，则返回 null。


## Examples

### Example #1 
计算列表 &lt;code&gt;\{1, 2, 3}&lt;/code&gt; 中的数的总和。
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition

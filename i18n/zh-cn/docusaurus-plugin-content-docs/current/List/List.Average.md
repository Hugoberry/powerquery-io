---
title: List.Average
---

# List.Average


## Description

返回值的平均值。处理 number、date、datetime、datetimezone 和 duration 值。


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

返回列表 <code>list</code> 中项的平均值。采用与列表中的值所属的同一数据类型给出结果。仅处理 number、date、time、datetime、datetimezone 和 duration 值。    如果列表为空，则返回 null。


## Examples

### Example #1 
计算数的列表 &lt;code&gt;\{3, 4, 6}&lt;/code&gt; 的平均值。
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
计算 date 值 2011 年 1 月 1 日、2011 年 1 月 2 日和 2011 年 1 月 3 日的平均值。
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages

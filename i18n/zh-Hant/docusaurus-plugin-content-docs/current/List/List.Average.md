---
title: List.Average
---

# List.Average


傳回值的平均值。適用於數字、日期、datetime、datetimezone 和工期值。


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

傳回清單 <code>list</code> 中項目的平均值。結果的資料類型與清單中的值相同。只適用於數字、日期、時間、datetime、datetimezone 和工期值。    如果清單是空的，即傳回 Null。


## Examples

### Example #1 
找出數字清單 &lt;code&gt;\{3, 4, 6}&lt;/code&gt; 的平均值。
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
找出 2011 年 1 月 1 日、2011 年 1 月 2 日和 2011 年 1 月 3 日的日期值平均。
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages

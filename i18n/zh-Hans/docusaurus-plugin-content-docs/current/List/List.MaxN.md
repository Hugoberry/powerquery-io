---
title: List.MaxN
---

# List.MaxN


返回列表中的最大值。必须指定要返回的值的数量或筛选条件。


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

返回列表 <code>list</code> 中的最大值。    在对行排序后，可以指定可选参数以进一步筛选结果。可选参数 <code>countOrCondition</code> 指定要返回的值的数量或筛选条件。可选参数 <code>comparisonCriteria</code> 指定如何比较列表中的值。 <ul>        <li> <code>list</code>: 值的列表。</li>        <li> <code>countOrCondition</code>: 如果指定一个数字，则返回以升序排序的最多包含 <code>countOrCondition</code> 个项的列表。如果指定条件，则返回从第一项开始满足该条件的项的列表。一旦某个项不满足该条件，则不再考虑其他项。</li><li><code>comparisonCriteria</code>: <i>[可选]</i> 可以指定可选的 <code>comparisonCriteria</code> 值来确定如何比较列表中的项。如果此参数为 null，则使用默认比较器。 </li></ul>



## Category
List.Ordering

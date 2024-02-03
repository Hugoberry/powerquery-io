---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

指示此日期是否会在系统当前日期和时间确定的下一季度数中出现。请注意，当传递一个在当前季度内出现的值时，此函数将返回 false。


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

指示给定的日期时间值 <code>dateTime</code> 是否会在系统当前日期和时间确定的下一季度数中出现。请注意，当传递一个在当前季度内出现的值时，此函数将返回 false。      <ul>      <li><code>dateTime</code>: 要计算的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>quarters</code>: 季度数。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间之后的季度是否在接下来的两个季度中。
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date

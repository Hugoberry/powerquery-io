---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


返回 1 到 6 之间的数字，指示此日期位于当月的哪一周。


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

返回 1 到 6 之间的数字，指示日期 <code>dateTime</code> 位于当月的哪一周。 <ul> <li><code>dateTime</code>: 已确定当月周数的<code>日期/时间</code>值。</li>      </ul>


## Examples

### Example #1 
确定 3 月 15 日属于 2011 年的哪一周。
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date

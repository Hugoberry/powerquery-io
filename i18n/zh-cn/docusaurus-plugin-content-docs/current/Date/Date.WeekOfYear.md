---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

返回一个介于 1 到 54 之间的数值，该数值指示此日期属于年份中的哪一周。


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

返回一个从 1 到 54 之间的数字，指示日期 <code>dateTime</code> 属于该年的哪一周。 <ul>        <li><code>dateTime</code>: <code>日期时间</code>值，确定该年的哪一周。</li>        <li><code>firstDayOfWeek</code>: 可选的 <code>Day.Type</code> 值，指示将哪一天视为新的一周的开始(例如，<code>Day.Sunday</code>)。如果未指定，将使用区域性相关默认值。</li>      </ul>


## Examples

### Example #1 
确定 2011 年 3 月 27 日属于该年的哪一周。
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
使用“星期一”作为周开始值，确定 2011 年 3 月 27 日属于该年的哪一周。
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date

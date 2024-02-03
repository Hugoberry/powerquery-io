---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

傳回 1 到 54 的數字，指出這個日期落在年度的哪一週。


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

傳回介於 1 至 54 之間的數字，指出日期 <code>dateTime</code> 落在該年的哪一週。 <ul>        <li><code>dateTime</code>: <code>datetime</code> 值決定該年哪一週。</li>        <li><code>firstDayOfWeek</code>: 選用的 <code>Day.Type</code> 值指出哪一天為新一週的起始日 (例如 <code>Day.Sunday</code>)。若未指定，會使用依文化特性決定的預設。</li>      </ul>


## Examples

### Example #1 
判斷 2011 年中的哪一週包含 3 月 27 日。
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
決定 2011 年 3 月 27 日落在該年的哪一週 ，使用星期一作為新一週的開始時間。
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date

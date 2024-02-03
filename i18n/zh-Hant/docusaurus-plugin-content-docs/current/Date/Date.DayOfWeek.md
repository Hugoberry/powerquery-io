---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

傳回數字 (從 0 到 6)，指出所提供值表示一週的哪一天。


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

傳回數字 (從 0 到 6)，指出所提供 <code>dateTime</code> 表示一週的哪一天。  <ul>        <li><code>dateTime</code>: <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>        <li><code>firstDayOfWeek</code>: <code>Day</code> 值，指出哪一天應視為一週的第一天。允許的值為 Day.Sunday、Day.Monday、Day.Tuesday、Day.Wednesday、Day.Thursday、Day.Friday 或 Day.Saturday。若未指定，則會根據文化特性使用預設。</li>      </ul>


## Examples

### Example #1 
將星期日視為一週的第一天，取得 2011 年 2 月 21 日星期一代表一週的哪一天。
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
將星期一視為一週的第一天，取得 2011 年 2 月 21 日星期一代表一週的哪一天。
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date

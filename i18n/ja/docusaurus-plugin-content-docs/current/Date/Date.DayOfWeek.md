---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

指定された値の曜日を示す数値 (0 から 6) を返します。


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

指定された <code>dateTime</code> の曜日を示す数値 (0 から 6) を返します。  <ul>        <li><code>dateTime</code>: <code>date</code>、<code>datetime</code>、<code>datetimezone</code> 値。</li>        <li><code>firstDayOfWeek</code>: どの曜日を週の最初の曜日と見なすかを示す <code>Day</code> 値。使用できる値は、Day.Sunday、Day.Monday、Day.Tuesday、Day.Wednesday、Day.Thursday、Day.Friday、Day.Saturday です。指定しない場合、カルチャに依存する既定値が使用されます。</li>      </ul>


## Examples

### Example #1 
日曜を週の最初の日として、2011 年 2 月 21 日月曜日で表される曜日を取得します。
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
月曜を週の最初の日として、2011 年 2 月 21 日月曜日で表される曜日を取得します。
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date

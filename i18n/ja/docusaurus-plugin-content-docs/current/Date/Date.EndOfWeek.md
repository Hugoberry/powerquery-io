---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

週の最後の日付を返します。


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

<code>dateTime</code> を含む週の最後の日付を返します。この関数は、省略可能な <code>Day</code> (<code>firstDayOfWeek</code>) を受け取って、この相対的な計算における週の最初の日を設定します。既定値は <code>Day.Sunday</code> です。      <ul>        <li><code>dateTime</code>: 週の最後の日が計算される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>        <li><code>firstDayOfWeek</code>: <i>[省略可能]</i> 週の最初の日を表す <code>Day.Type</code> 値。指定できる値は、<code>Day.Sunday</code>、<code>Day.Monday</code>、<code>Day.Tuesday</code>、<code>Day.Wednesday</code>、<code>Day.Thursday</code>、<code>Day.Friday</code>、および <code>Day.Saturday.</code> です。既定値は <code>Day.Sunday</code> です。</li>      </ul>


## Examples

### Example #1 
5/14/2011 の週の終わりを取得します。
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
日曜を週の最初の日として、5/17/2011 05:00:00 PM -7:00 の週の終わりを取得します。
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date

---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


システム上の現在の日時によって決定されるとおり、この日付が現在の年内に含まれていて、現在の日付以前であるかどうかを示します。


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定されるとおり、指定された datetime 値 <code>dateTime</code> が現在の年内に含まれていて、現在の日付以前であるかどうかを示します。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻が過去 1 年に含まれるかどうかを調べます。
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date

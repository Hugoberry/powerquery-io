---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


システム上の現在の日時によって決定される現在の週にこの日付が含まれるかどうかを示します。


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される現在の週に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻が現在の週に含まれるかどうかを調べます。
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date

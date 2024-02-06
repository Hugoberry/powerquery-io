---
title: Date.IsInNextDay
---

# Date.IsInNextDay


システム上の現在の日時によって決定される次の日に、この date が含まれるかどうかを示します。この関数は、現在の日付に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される次の日に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の日付に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code> または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻より後の日付が次の日に含まれるかどうかを調べます。
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date

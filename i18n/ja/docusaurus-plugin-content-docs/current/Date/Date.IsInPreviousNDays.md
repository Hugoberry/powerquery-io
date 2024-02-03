---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

システム上の現在の日時によって決定される前の日数に、この date が含まれるかどうかを示します。この関数は、現在の日付に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

システム上の現在の日時によって決定される前の日数に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の日付に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code> または <code>datetimezone</code> 値。</li>      <li><code>days</code>: 日数。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻より前の日付が前の 2 日に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date

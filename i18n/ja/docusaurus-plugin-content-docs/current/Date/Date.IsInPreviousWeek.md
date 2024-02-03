---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


## Description

システム上の現在の日時によって決定される前の週に、この date が含まれるかどうかを示します。この関数は、現在の週に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Details

システム上の現在の日時によって決定される前の週に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の週に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code> または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻より前の週が前の週に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date

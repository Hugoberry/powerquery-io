---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

システム上の現在の日時によって決定される前の月数に、この date が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

システム上の現在の日時によって決定される前の月数に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code> または <code>datetimezone</code> 値。</li>      <li><code>months</code>: 月数。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻より前の月が前の 2 か月に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date

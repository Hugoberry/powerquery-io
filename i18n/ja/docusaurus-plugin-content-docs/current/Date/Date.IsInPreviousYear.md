---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


## Description

システム上の現在の日時によって決定される前の年に、この date が含まれるかどうかを示します。この関数は、現在の年に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Details

システム上の現在の日時によって決定される前の年に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の年に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code> または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻より前の年が前の年に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date

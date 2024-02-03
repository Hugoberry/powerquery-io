---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

システム上の現在の日時によって決定される次の月数に、この date が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

システム上の現在の日時によって決定される次の月数に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code> または <code>datetimezone</code> 値。</li>      <li><code>months</code>: 月の数。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻より後の月が、次の 2 か月間に含まれるかどうかを調べます。
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date

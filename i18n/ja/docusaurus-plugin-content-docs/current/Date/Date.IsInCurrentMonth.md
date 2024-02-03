---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

システム上の現在の日時によって決定される現在の月にこの日付が含まれるかどうかを示します。


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

システム上の現在の日時によって決定される現在の月に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻が現在の月に含まれるかどうかを調べます。
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date

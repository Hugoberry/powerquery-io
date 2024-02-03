---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

システム上の現在の日時によって決定される現在の年にこの日付が含まれるかどうかを示します。


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

システム上の現在の日時によって決定される現在の年に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻が現在の年に含まれるかどうかを調べます。
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date

---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

システム上の現在の日時によって決定される次の時間数に、この datetime が含まれるかどうかを示します。この関数は、現在の 1 時間に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

システム上の現在の日時によって決定される次の時間数に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の 1 時間に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>datetime</code> または <code>datetimezone</code> 値。</li>      <li><code>hours</code>: 時間数。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻の次の時間が、次の 2 時間に含まれるかどうかを調べます。
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime

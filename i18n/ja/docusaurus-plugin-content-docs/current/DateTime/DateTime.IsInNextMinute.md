---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

システム上の現在の日時によって決定される次の 1 分間に、この datetime が含まれるかどうかを示します。この関数は、現在の 1 分間に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

システム上の現在の日時によって決定される次の 1 分間に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の 1 分間に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>datetime</code> または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻の次の分が次の 1 分間に含まれるかどうかを調べます。
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime

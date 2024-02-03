---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

システム上の現在の日時によって決定される次の分単位の時間に、この datetime が含まれるかどうかを示します。この関数は、現在の 1 分間に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

システム上の現在の日時によって決定される次の分単位の時間に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の 1 分間に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>datetime</code> または <code>datetimezone</code> 値。</li>      <li><code>minutes</code>: 分単位の時間。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻の次の分が、次の 2 分間に含まれるかどうかを調べます。
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime

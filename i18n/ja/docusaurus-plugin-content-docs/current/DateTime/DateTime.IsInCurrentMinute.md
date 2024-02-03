---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

システム上の現在の日時によって決定される現在の分に、この datetime が含まれるかどうかを示します。


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

システム上の現在の日時によって決定される現在の分に、指定された datetime の値 <code>dateTime</code> が含まれるかどうかを示します。      <ul>      <li><code>dateTime</code>: 評価する <code>datetime</code> または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻が現在の分に含まれるかどうかを調べます。
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime

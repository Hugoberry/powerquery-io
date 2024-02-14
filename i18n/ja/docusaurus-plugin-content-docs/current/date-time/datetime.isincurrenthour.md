---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


システム上の現在の日時によって決定される現在の時間に、この datetime が含まれるかどうかを示します。


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される現在の時間に、指定された datetime の値 <code>dateTime</code> が含まれるかどうかを示します。      <ul>      <li><code>dateTime</code>: 評価する <code>datetime</code> または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻が現在の時間に含まれるかどうかを調べます。
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime

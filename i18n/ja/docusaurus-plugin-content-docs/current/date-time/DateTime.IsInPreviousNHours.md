---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


システム上の現在の日時によって決定される前の時間数に、この datetime が含まれるかどうかを示します。この関数は、現在の 1 時間に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

システム上の現在の日時によって決定される前の時間数に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の 1 時間に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>datetime</code> または <code>datetimezone</code> 値。</li>      <li><code>hours</code>: 時間数。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻の前の時間が前の 2 時間に含まれるかどうかを調べます。
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


システム上の現在の日時によって決定される前の 1 秒間に、この datetime が含まれるかどうかを示します。この関数は、現在の 1 秒間に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される前の 1 秒間に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の 1 秒間に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>datetime</code> または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻の前の秒が前の 1 秒間に含まれるかどうかを調べます。
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime

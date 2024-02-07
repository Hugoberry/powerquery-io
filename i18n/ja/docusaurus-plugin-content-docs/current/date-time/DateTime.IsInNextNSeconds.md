---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


システム上の現在の日時によって決定される次の秒数に、この datetime が含まれるかどうかを示します。この関数は、現在の 1 秒間に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

システム上の現在の日時によって決定される次の秒数に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の 1 秒間に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>datetime</code> または <code>datetimezone</code> 値。</li>      <li><code>seconds</code>: 秒数。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻の次の秒が、次の 2 秒間に含まれるかどうかを調べます。
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime

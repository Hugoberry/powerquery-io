---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


システム上の現在の日時によって決定される次の月に、この date が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される次の月に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code> または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻より後の月が次の月に含まれるかどうかを調べます。
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date

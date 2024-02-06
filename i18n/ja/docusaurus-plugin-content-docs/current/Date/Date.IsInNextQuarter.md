---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


システム上の現在の日時によって決定される次の四半期に、この date が含まれるかどうかを示します。この関数は、現在の四半期に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される次の四半期に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の四半期に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code> または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻より後の四半期が次の四半期に含まれるかどうかを調べます。
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date

---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


システム上の現在の日時によって決定される次の年数に、この date が含まれるかどうかを示します。この関数は、現在の年に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

システム上の現在の日時によって決定される次の年数に、指定された datetime 値 <code>dateTime</code> が含まれるかどうかを示します。この関数は、現在の年に含まれる値が渡された場合は false を返すことに注意してください。      <ul>      <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      <li><code>years</code>: 年数。</li>      </ul>


## Examples

### Example #1 
現在のシステム時刻より後の年が、次の 2 年に含まれるかどうかを調べます。
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date

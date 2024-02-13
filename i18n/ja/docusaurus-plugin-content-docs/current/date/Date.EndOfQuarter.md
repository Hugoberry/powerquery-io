---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


四半期の最後の日付を返します。


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

<code>dateTime</code> を含む四半期の最後の日付を返します。タイム ゾーン情報は保持されます。      <ul>        <li><code>dateTime</code>: 四半期の終わりが計算される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
2011 年 10 月 10 日午前 8 時の四半期の終わりを調べます。
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date

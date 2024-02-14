---
title: Date.StartOfMonth
---

# Date.StartOfMonth


月の最初の日付を返します。


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

<code>dateTime</code> を含む月の最初の日付を返します。    <code>dateTime</code> は <code>date</code> または <code>datetime</code> 値である必要があります。


## Examples

### Example #1 
2011 年 10 月 10 日午前 8 時 10 分 32 秒の月の始まりを調べます。
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date

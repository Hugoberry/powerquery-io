---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

四半期の最初の日付を返します。


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> を含む四半期の最初の日付を返します。    <code>dateTime</code> は、<code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値である必要があります。


## Examples

### Example #1 
2011 年 10 月 10 日午前 8 時の四半期の始まりを調べます。
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

日付の始まりを返します。


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> で表される日の始まりを返します。    <code>dateTime</code> は、<code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値である必要があります。


## Examples

### Example #1 
2011 年 10 月 10 日午前 8 時の日の始まりを調べます。
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date

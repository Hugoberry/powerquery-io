---
title: Time.StartOfHour
---

# Time.StartOfHour


時間の最初の日付を返します。


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

<code>dateTime</code> で表される時間の始まりを返します。    <code>dateTime</code> は、<code>time</code>、<code>datetime</code>、または <code>datetimezone</code> 値である必要があります。


## Examples

### Example #1 
2011 年 10 月 10 日午前 8 時 10 分 32 秒の時間の始まりを調べます。
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date

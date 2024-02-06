---
title: Date.StartOfWeek
---

# Date.StartOfWeek


週の始まりを返します。


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

<code>dateTime</code> を含む週の最初の日付を返します。    <code>dateTime</code> は、<code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値である必要があります。


## Examples

### Example #1 
2011 年 10 月 11 日火曜日の週の始まりを検索します。
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
週の始まりとして月曜日を使用して、2011 年 10 月 11 日火曜日の週の始まりを検索します。
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date

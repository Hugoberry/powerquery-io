---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

日付の終わりを返します。


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> で表される日付の終わりを返します。タイム ゾーン情報は保持されます。      <ul>        <li><code>dateTime</code>: 日付の終わりが計算される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
5/14/2011 05:00:00 PM の日付の終わりを取得します。
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
5/17/2011 05:00:00 PM -7:00 の日付の終わりを取得します。
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date

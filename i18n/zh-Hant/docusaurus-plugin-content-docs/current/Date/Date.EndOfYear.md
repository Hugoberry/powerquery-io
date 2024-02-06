---
title: Date.EndOfYear
---

# Date.EndOfYear


傳回年度結束時間。


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

傳回包含 <code>dateTime</code> 的年度結束時間，包括小數秒數。時區資訊會保留。      <ul>        <li><code>dateTime</code>: 要計算年度結束時間的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
取得 5/14/2011 05:00:00 PM 的年底。
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
取得 5/17/2011 05:00:00 PM -7:00 這一小時的結尾。
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date

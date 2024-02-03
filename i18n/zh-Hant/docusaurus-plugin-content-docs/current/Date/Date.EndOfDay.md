---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

傳回當日的結束時間。


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

傳回以 <code>dateTime</code> 代表的每日結束時間。會保留時區資訊。      <ul>        <li><code>dateTime</code>: 要用來計算每日結束時間的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值</li>      </ul>


## Examples

### Example #1 
取得 5/14/2011 05:00:00 PM 這一天的結束。
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
取得 5/17/2011 05:00:00 PM -7:00 這一天的結束。
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date

---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

傳回小時的結束時間。


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

傳回以 <code>dateTime</code> 代表的小時結束時間，包括小數秒數。時區資訊會保留。      <ul>        <li><code>dateTime</code>: 要計算小時結束時間的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
取得 5/14/2011 05:00:00 PM 的小時結尾。
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
取得 5/17/2011 05:00:00 PM -7:00 的小時結尾。
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date

---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


傳回季度結束時間。


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

傳回包含 <code>dateTime</code> 的季度結束時間。會保留時區資訊。      <ul>        <li><code>dateTime</code>: 要用來計算季度結束時間的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值</li>      </ul>


## Examples

### Example #1 
找出 2011 年 10 月 10 日上午 8:00 的季度結束時間。
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date

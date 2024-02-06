---
title: Date.EndOfMonth
---

# Date.EndOfMonth


傳回月度結束時間。


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

傳回包含 <code>dateTime</code> 的月度結束時間。      <ul>        <li><code>dateTime</code>: 要用來計算月底的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值</li>      </ul>


## Examples

### Example #1 
取得 5/14/2011 的月底。
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
取得 5/17/2011 05:00:00 PM -7:00 的月底。
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date

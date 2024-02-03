---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

返回年结束值。


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

返回包含 <code>dateTime</code> 的年结束值，包括小数秒。保留时区信息。      <ul>        <li><code>dateTime</code>: 从中计算年结束值的 <code>date</code>、<code>datetime</code>或<code>datetimezone</code>值。</li>      </ul>


## Examples

### Example #1 
获取 5/14/2011 05:00:00 PM 的年份结束值。
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
获取 5/17/2011 05:00:00 PM -7:00 的小时结束值。
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date

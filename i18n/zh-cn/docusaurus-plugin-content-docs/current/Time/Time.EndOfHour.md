---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

返回小时结束值。


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

返回 <code>dateTime</code> 表示的小时结束值，包括小数秒。保留时区信息。      <ul>        <li><code>dateTime</code>: 从中计算小时结束值的<code>time</code>、<code>datetime</code>或<code>datetimezone</code>值。</li>      </ul>


## Examples

### Example #1 
获取 5/14/2011 05:00:00 PM 的小时结尾。
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
获取 5/17/2011 05:00:00 PM -7:00 的小时结尾。
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date

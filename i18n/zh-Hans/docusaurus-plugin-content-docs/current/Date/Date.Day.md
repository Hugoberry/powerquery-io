---
title: Date.Day
---

# Date.Day


## Description

返回星期几部分。


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

返回 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值的日部分。      <ul>        <li><code>dateTime</code>: 要从其提取日部分的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
获取表示 5/14/2011 05:00:00 PM 的日期和时间的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值的日部分。
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date

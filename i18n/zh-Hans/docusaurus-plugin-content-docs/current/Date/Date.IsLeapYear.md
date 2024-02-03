---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

指示此日期是否处于闰年中。


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

指示给定的日期时间值 <code>dateTime</code> 是否处于闰年。 <ul>        <li><code>dateTime</code>: 要进行求值的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
确定由 &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; 表示的 2012 年是否为闰年。
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date

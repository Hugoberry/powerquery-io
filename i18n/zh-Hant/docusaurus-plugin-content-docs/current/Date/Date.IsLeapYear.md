---
title: Date.IsLeapYear
---

# Date.IsLeapYear


指出這個日期是否在閏年中。


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

指出指定的 datetime 值 <code>dateTime</code> 是否在閏年中。 <ul>        <li><code>dateTime</code>: 要評估的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
判斷 &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; 所代表的 2012 年是否為閏年。
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date

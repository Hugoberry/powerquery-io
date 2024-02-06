---
title: Date.DaysInMonth
---

# Date.DaysInMonth


返回指示一个月中的天数的数值，该值介于 28 和 31 之间。


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

返回 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值 <code>dateTime</code> 中一个月的天数。 <ul>        <li><code>dateTime</code>: 为其返回月份中的天数的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
由 &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt; 表示的十二月的天数。
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date

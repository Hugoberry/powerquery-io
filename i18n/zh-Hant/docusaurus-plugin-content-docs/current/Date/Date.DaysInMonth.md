---
title: Date.DaysInMonth
---

# Date.DaysInMonth


傳回 28 到 31 的數字，指出當月天數。


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

傳回 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值 <code>dateTime</code> 中當月的天數。 <ul>        <li><code>dateTime</code>: 要傳回當月天數的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt; 所表示的 12 月的天數。
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date

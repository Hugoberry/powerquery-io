---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Returnerar ett tal från 28 till 31 som anger antalet dagar i månaden.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Returnerar antalet dagar i månaden i <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värdet <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som antalet dagar i månaden returneras för.</li>      </ul>


## Examples

### Example #1 
Antalet dagar i december månad representerat av &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date

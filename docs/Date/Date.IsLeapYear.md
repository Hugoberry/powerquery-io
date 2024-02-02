---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Indicates whether this date falls in a leap year.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Indicates whether the given datetime value <code>dateTime</code> falls in is a leap year. <ul>        <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the year 2012, as represented by &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; is a leap year.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date

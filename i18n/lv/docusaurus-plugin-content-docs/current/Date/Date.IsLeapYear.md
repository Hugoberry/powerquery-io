---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Norāda, vai šis datums iekrīt garajā gadā.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Norāda, vai norādītā datetime vērtība <code>dateTime</code> iekrīt garajā gadā.  <ul>        <li><code>dateTime</code>: novērtējamā <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība.</li>      </ul>


## Examples

### Example #1 
Nosakiet, vai 2012. gads, kā to norāda &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, ir garais gads.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date

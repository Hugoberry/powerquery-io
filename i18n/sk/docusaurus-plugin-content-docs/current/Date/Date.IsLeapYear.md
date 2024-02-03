---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Udáva, či tento dátum spadá do priestupného roka.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Udáva, či daná hodnota dátumu a času <code>dateTime</code> spadá do priestupného roka. <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či rok 2012 vyjadrený hodnotou &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; je priestupným rokom.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date

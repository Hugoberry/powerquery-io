---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Značí, zda datum spadá do přestupného roku.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Značí, zda předaná hodnota datetime <code>dateTime</code> spadá do přestupného roku.  <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určí, zda je rok 2012 reprezentovaný hodnotou &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; přestupný
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date

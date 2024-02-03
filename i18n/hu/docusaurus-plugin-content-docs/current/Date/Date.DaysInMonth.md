---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

A hónapban levő napok számát jelző, 28 és 31 közötti számot ad vissza.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

A(z) <code>dateTime</code> <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> értékben lévő hónap napjainak számát adja vissza. <ul>        <li><code>dateTime</code>: Egy <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték, amely esetében a hónap napjainak száma vissza lesz adva.</li>      </ul>


## Examples

### Example #1 
A &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt; értékkel jelölt december hónapban levő napok száma
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date

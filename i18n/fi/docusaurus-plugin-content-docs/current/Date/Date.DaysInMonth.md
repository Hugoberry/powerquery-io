---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Palauttaa kuukauden päivien määrää ilmaisevan luvun 28–31


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Palauttaa kuukauden päivien määrän <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvossa <code>dateTime</code>. <ul>        <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo, jonka kuukauden päivien määrä palautetaan.</li>      </ul>


## Examples

### Example #1 
Joulukuun päivien määrä kohteen &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt; edustamana.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date

---
title: Date.AddDays
---

# Date.AddDays


## Description

Datumu doda določene dni.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Vrne rezultat <code>date</code>, <code>datetime</code> ali <code>datetimezone</code> od dodajanja <code>numberOfDays</code> dni vrednosti <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, h kateri se dodajo dnevi.</li>      <li><code>numberOfDays</code>: število dni, ki naj se dodajo.</li>      </ul>


## Examples

### Example #1 
Dodajte 5 dni vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ali &lt;code&gt;datetimezone&lt;/code&gt;, ki predstavlja datum 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date

---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Datumu doda določene tedne.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Vrne rezultat <code>date</code>, <code>datetime</code> ali <code>datetimezone</code> od dodajanja <code>numberOfWeeks</code> tednov vrednosti <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, h kateri se dodajo tedni.</li>      <li><code>numberOfWeeks</code>: število tednov, ki naj se dodajo.</li>      </ul>


## Examples

### Example #1 
Dodajte 2 tedna vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ali &lt;code&gt;datetimezone&lt;/code&gt;, ki predstavlja datum 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

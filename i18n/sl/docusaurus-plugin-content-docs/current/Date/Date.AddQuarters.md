---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Datumu doda določena četrtletja.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Vrne rezultat <code>date</code>, <code>datetime</code> ali <code>datetimezone</code> od dodajanja <code>numberOfQuarters</code> četrtletij vrednosti <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, h kateri se dodajo četrtletja.</li>      <li><code>numberOfQuarters</code>: število četrtletij, ki naj se dodajo.</li>      </ul>


## Examples

### Example #1 
Dodajte 1 četrtletje vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ali &lt;code&gt;datetimezone&lt;/code&gt;, ki predstavlja datum 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date

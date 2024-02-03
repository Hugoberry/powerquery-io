---
title: Date.AddYears
---

# Date.AddYears


## Description

Datumu doda določena leta.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Vrne rezultat <code>date</code>, <code>datetime</code> ali <code>datetimezone</code> od dodajanja <code>numberOfYears</code> vrednosti <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, h kateri se dodajo leta.</li>        <li><code>numberOfYears</code>: število let, ki naj se dodajo.</li>      </ul>


## Examples

### Example #1 
Dodajte 4 leta vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ali &lt;code&gt;datetimezone&lt;/code&gt;, ki predstavlja datum 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Dodajte 10 let vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ali &lt;code&gt;datetimezone&lt;/code&gt;, ki predstavlja datum in čas 5/14/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

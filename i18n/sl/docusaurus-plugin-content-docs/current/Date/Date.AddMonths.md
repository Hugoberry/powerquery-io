---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Datumu doda določene mesece.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Vrne rezultat <code>date</code>, <code>datetime</code> ali <code>datetimezone</code> od dodajanja <code>numberOfMonths</code> mesecev vrednosti <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, h kateri se dodajo meseci.</li>        <li><code>numberOfMonths</code>: število mesecev, ki naj se dodajo.</li>      </ul>


## Examples

### Example #1 
Dodajte 5 mesecev vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ali &lt;code&gt;datetimezone&lt;/code&gt;, ki predstavlja datum 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Dodajte 18 mesecev vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ali &lt;code&gt;datetimezone&lt;/code&gt;, ki predstavlja datum in čas 5/14/2011 08:15:22 AM.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

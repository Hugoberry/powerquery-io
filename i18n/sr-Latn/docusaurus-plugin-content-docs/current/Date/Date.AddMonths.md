---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Dodaje navedene mesece u datum.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Vraća rezultat <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> od dodavanja <code>numberOfMonths</code> meseci u vrednost <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> u koju se dodaju meseci.</li>        <li><code>numberOfMonths</code>: Broj meseci koji se dodaju.</li>      </ul>


## Examples

### Example #1 
Dodavanje 5 meseci vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ili &lt;code&gt;datetimezone&lt;/code&gt;, koja predstavlja datum 14.5.2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Dodavanje 18 meseci vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ili &lt;code&gt;datetimezone&lt;/code&gt;, koja predstavlja datum 14.5.2011. i vreme 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

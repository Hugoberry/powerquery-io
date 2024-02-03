---
title: Date.AddDays
---

# Date.AddDays


## Description

Dodaje navedene dane u datum.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Vraća rezultat <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> od dodavanja <code>numberOfDays</code> dana u vrednost <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> na koju se dodaju dani.</li>      <li><code>numberOfDays</code>: Broj dana koji se dodaju.</li>      </ul>


## Examples

### Example #1 
Dodavanje 5 dana vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ili &lt;code&gt;datetimezone&lt;/code&gt;, koja predstavlja datum 14.5.2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date

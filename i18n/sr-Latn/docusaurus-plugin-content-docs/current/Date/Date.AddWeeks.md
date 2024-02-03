---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Dodaje navedene sedmice u datum.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Vraća rezultat <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> od dodavanja <code>numberOfWeeks</code> sedmica u vrednost <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> na koju se dodaju sedmice.</li>      <li><code>numberOfWeeks</code>: Broj sedmica koje se dodaju.</li>      </ul>


## Examples

### Example #1 
Dodavanje 2 sedmice vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ili &lt;code&gt;datetimezone&lt;/code&gt;, koja predstavlja datum 14.5.2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

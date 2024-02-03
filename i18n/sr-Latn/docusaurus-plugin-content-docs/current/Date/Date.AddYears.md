---
title: Date.AddYears
---

# Date.AddYears


## Description

Dodaje navedene godine u datum.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Vraća rezultat <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> od dodavanja <code>numberOfYears</code> vrednosti <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> na koju se dodaju godine.</li>        <li><code>numberOfYears</code>: Broj godina koje se dodaju.</li>      </ul>


## Examples

### Example #1 
Dodavanje 4 godine vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ili &lt;code&gt;datetimezone&lt;/code&gt;, koja predstavlja datum 14.5.2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Dodavanje 10 godina vrednosti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ili &lt;code&gt;datetimezone&lt;/code&gt;, koja predstavlja datum 14.5.2011. i vreme 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

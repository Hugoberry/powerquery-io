---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Lägger till angivna kvartal i datumet.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Returnerar <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-resultatet när <code>numberOfQuarters</code> kvartal har lagts till i <code>datetime</code>-värdet <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värdet som kvartal läggs till i.</li>      <li><code>numberOfQuarters</code>: Antalet kvartal som ska läggas till.</li>      </ul>


## Examples

### Example #1 
Lägg till 1 kvartal i &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- eller &lt;code&gt;datetimezone&lt;/code&gt;-värdet som representerar den 14 maj 2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date

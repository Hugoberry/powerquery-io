---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Lägger till angivna veckor i datumet.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Returnerar <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-resultatet när <code>numberOfWeeks</code> veckor har lagts till i <code>datetime</code>-värdet <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värdet som veckor läggs till i.</li>      <li><code>numberOfWeeks</code>: Antalet veckor som ska läggas till.</li>      </ul>


## Examples

### Example #1 
Lägg till 2 veckor i &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- eller &lt;code&gt;datetimezone&lt;/code&gt;-värdet som representerar den 14 maj 2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Voegt de opgegeven maanden toe aan de datum.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Hiermee wordt het <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-resultaat geretourneerd van het toevoegen van <code>numberOfMonths</code> maanden aan de <code>datetime</code>-waarde <code>dateTime</code>. <ul> <li><code>dateTime</code>: de <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde waaraan maanden worden toegevoegd.</li> <li><code>numberOfMonths</code>: het aantal maanden dat moet worden toegevoegd.</li> </ul>


## Examples

### Example #1 
5 maanden aan de waarde voor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; of &lt;code&gt;datetimezone&lt;/code&gt; toevoegen die de waarde 14/5/2011 vertegenwoordigt.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
18 maanden aan de waarde voor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; of &lt;code&gt;datetimezone&lt;/code&gt; toevoegen die de datum 14/5/2011 en de tijd 08:15:22 AM vertegenwoordigt.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

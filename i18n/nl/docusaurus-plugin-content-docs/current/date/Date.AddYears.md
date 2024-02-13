---
title: Date.AddYears
---

# Date.AddYears


Voegt de opgegeven jaren toe aan de datum.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Hiermee wordt het <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-resultaat geretourneerd van het toevoegen van <code>numberOfYears</code> aan een <code>datetime</code>-waarde <code>dateTime</code>. <ul> <li><code>dateTime</code>: de <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde waaraan jaren worden toegevoegd.</li> <li><code>numberOfYears</code>: het aantal jaren dat moet worden toegevoegd.</li> </ul>


## Examples

### Example #1 
4 jaren aan de waarde voor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; of &lt;code&gt;datetimezone&lt;/code&gt; toevoegen die de waarde 14/5/2011 vertegenwoordigt.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
10 jaren aan de waarde voor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; of &lt;code&gt;datetimezone&lt;/code&gt; toevoegen die de datum 14/5/2011 en de tijd 08:15:22 AM vertegenwoordigt.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

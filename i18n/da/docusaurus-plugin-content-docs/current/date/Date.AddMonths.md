---
title: Date.AddMonths
---

# Date.AddMonths


Tilføjer de angivne måneder efter datoen.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Returnerer resultaterne for <code>date</code>, <code>datetime</code> eller <code>datetimezone</code> efter at have føjet <code>numberOfMonths</code> måneder til værdien af typen <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Den værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, som måneder føjes til.</li>        <li><code>numberOfMonths</code>: Det antal måneder, der skal tilføjes.</li>      </ul>


## Examples

### Example #1 
Føj 5 måneder til værdien af typen &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; eller &lt;code&gt;datetimezone&lt;/code&gt;, som repræsenterer datoen 14-05-2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Føj 18 måneder til værdien af typen &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; eller &lt;code&gt;datetimezone&lt;/code&gt;, som repræsenterer datoen og klokkeslættet 14-05-2011, 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

---
title: Date.AddYears
---

# Date.AddYears


## Description

Tilføjer de angivne år efter datoen.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Returnerer resultaterne for <code>date</code>, <code>datetime</code> eller <code>datetimezone</code> efter at have føjet <code>numberOfYears</code> til værdien af typen <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Den værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, som år føjes til.</li>        <li><code>numberOfYears</code>: Det antal år, der skal tilføjes.</li>      </ul>


## Examples

### Example #1 
Føj 4 år til værdien af typen &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; eller &lt;code&gt;datetimezone&lt;/code&gt;, som repræsenterer datoen 14-05-2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Føj 10 år til værdien af typen &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; eller &lt;code&gt;datetimezone&lt;/code&gt;, som repræsenterer datoen og klokkeslættet 14-05-2011, 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

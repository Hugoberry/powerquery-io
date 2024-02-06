---
title: Date.AddDays
---

# Date.AddDays


Tilføjer de angivne dage efter datoen.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Returnerer resultaterne for <code>date</code>, <code>datetime</code> eller <code>datetimezone</code> efter at have føjet <code>numberOfDays</code> dage til værdien af typen <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Den værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, som dage føjes til.</li>      <li><code>numberOfDays</code>: Det antal dage, der skal tilføjes.</li>      </ul>


## Examples

### Example #1 
Føj 5 dage til værdien af typen &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; eller &lt;code&gt;datetimezone&lt;/code&gt;, som repræsenterer datoen 14-05-2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date

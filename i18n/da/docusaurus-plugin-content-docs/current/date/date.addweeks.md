---
title: Date.AddWeeks
---

# Date.AddWeeks


Tilføjer de angivne uger efter datoen.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Returnerer resultaterne for <code>date</code>, <code>datetime</code> eller <code>datetimezone</code> efter at have føjet <code>numberOfWeeks</code> uger til værdien af typen <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Den værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, som uger føjes til.</li>      <li><code>numberOfWeeks</code>: Det antal uger, der skal tilføjes.</li>      </ul>


## Examples

### Example #1 
Føj 2 uger til værdien af typen &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; eller &lt;code&gt;datetimezone&lt;/code&gt;, som repræsenterer datoen 14-05-2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

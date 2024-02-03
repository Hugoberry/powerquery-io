---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Tilføjer de angivne kvartaler efter datoen.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Returnerer resultaterne for <code>date</code>, <code>datetime</code> eller <code>datetimezone</code> efter at have føjet <code>numberOfQuarters</code> kvartaler til værdien af typen <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Den værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, som kvartaler føjes til.</li>      <li><code>numberOfQuarters</code>: Det antal kvartaler, der skal tilføjes.</li>      </ul>


## Examples

### Example #1 
Føj 1 kvartal til værdien af typen &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; eller &lt;code&gt;datetimezone&lt;/code&gt;, som repræsenterer datoen 14-05-2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date

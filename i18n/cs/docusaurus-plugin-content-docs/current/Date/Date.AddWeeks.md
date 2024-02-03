---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Přičte zadaný počet týdnů k datu.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Vrátí výsledek <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> z přičtení <code>numberOfWeeks</code> týdnů k hodnotě <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, ke které se přičítají týdny.</li>      <li><code>numberOfWeeks</code>: Počet týdnů, které se mají přičíst.</li>      </ul>


## Examples

### Example #1 
Přičíst 2 týdny k hodnotě &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; nebo &lt;code&gt;datetimezone&lt;/code&gt; představující datum 14. 5. 2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

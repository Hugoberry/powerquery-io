---
title: Date.AddYears
---

# Date.AddYears


## Description

Přičte zadaný počet roků k datu.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Vrátí výsledek <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> z přičtení <code>numberOfYears</code> roků k hodnotě <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, ke které se přičítají roky.</li>        <li><code>numberOfYears</code>: Počet roků, které se mají přičíst.</li>      </ul>


## Examples

### Example #1 
Přičíst 4 roky k hodnotě &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; nebo &lt;code&gt;datetimezone&lt;/code&gt; představující datum 14. 5. 2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Přičíst 10 let k hodnotě &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; nebo &lt;code&gt;datetimezone&lt;/code&gt; představující datum 14. 5. 2011, čas 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

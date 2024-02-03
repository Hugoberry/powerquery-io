---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Přičte zadaný počet měsíců k datu.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Vrátí výsledek <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> z přičtení <code>numberOfMonths</code> měsíců k hodnotě <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, ke které se přičítají měsíce.</li>        <li><code>numberOfMonths</code>: Počet měsíců, které se mají přičíst.</li>      </ul>


## Examples

### Example #1 
Přičíst 5 měsíců k hodnotě &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; nebo &lt;code&gt;datetimezone&lt;/code&gt; představující datum 14. 5. 2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Přičíst 18 měsíců k hodnotě &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; nebo &lt;code&gt;datetimezone&lt;/code&gt; představující datum 14. 5. 2011, čas 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

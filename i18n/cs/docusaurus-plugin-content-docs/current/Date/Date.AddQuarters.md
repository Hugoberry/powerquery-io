---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Přičte zadaný počet čtvrtletí k datu.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Vrátí výsledek <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> z přičtení <code>numberOfQuarters</code> čtvrtletí k hodnotě <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, ke které se přičítají čtvrtletí.</li>      <li><code>numberOfQuarters</code>: Počet čtvrtletí, které se mají přičíst.</li>      </ul>


## Examples

### Example #1 
Přičíst 1 čtvrtletí k hodnotě &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; nebo &lt;code&gt;datetimezone&lt;/code&gt; představující datum 14. 5. 2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date

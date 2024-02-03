---
title: Date.AddDays
---

# Date.AddDays


## Description

Přičte zadaný počet dní k datu.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Vrátí výsledek <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> z přičtení <code>numberOfDays</code> dní k hodnotě <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, ke které se přičítají dny.</li>      <li><code>numberOfDays</code>: Počet dní, které se mají přičíst.</li>      </ul>


## Examples

### Example #1 
Přičíst 5 dní k hodnotě &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; nebo &lt;code&gt;datetimezone&lt;/code&gt; představující datum 14. 5. 2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date

---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Hozzáadja a megadott számú hetet a dátumhoz.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Azt a <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú eredményt adja vissza, amely <code>numberOfWeeks</code> hétnek a(z) <code>dateTime</code> <code>datetime</code> értékhez való hozzáadásával keletkezik.      <ul>      <li><code>dateTime</code>: Az a <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték, amelyhez heteket ad hozzá</li>      <li><code>numberOfWeeks</code>: A hozzáadni kívánt hetek száma</li>      </ul>


## Examples

### Example #1 
2 hét hozzáadása a 2011. 05. 14. dátumot jelölő &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vagy &lt;code&gt;datetimezone&lt;/code&gt; típusú értékhez
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

---
title: Date.AddDays
---

# Date.AddDays


## Description

Hozzáadja a megadott számú napot a dátumhoz.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Azt a <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú eredményt adja vissza, amely <code>numberOfDays</code> napnak a(z) <code>dateTime</code> <code>datetime</code> értékhez való hozzáadásával keletkezik.      <ul>      <li><code>dateTime</code>: Az a <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték, amelyhez napokat ad hozzá</li>      <li><code>numberOfDays</code>: A hozzáadni kívánt napok száma</li>      </ul>


## Examples

### Example #1 
5 nap hozzáadása a 2011. 05. 14. dátumot jelölő &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vagy &lt;code&gt;datetimezone&lt;/code&gt; típusú értékhez
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date

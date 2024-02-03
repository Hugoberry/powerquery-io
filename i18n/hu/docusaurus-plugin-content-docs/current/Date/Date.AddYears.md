---
title: Date.AddYears
---

# Date.AddYears


## Description

Hozzáadja a megadott számú évet a dátumhoz.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Azt a <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú eredményt adja vissza, amely <code>numberOfYears</code> év és a(z) <code>dateTime</code> <code>datetime</code> érték összeadásából keletkezik.      <ul>        <li><code>dateTime</code>: Az a <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték, amelyhez éveket ad hozzá.</li>        <li><code>numberOfYears</code>: A hozzáadandó évek száma.</li>      </ul>


## Examples

### Example #1 
4 év hozzáadása a 2011. 05. 14. dátumot jelölő &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vagy &lt;code&gt;datetimezone&lt;/code&gt; típusú értékhez
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
10 év hozzáadása a 2011. 05. 14., 08:15:22 dátumot és időt jelölő &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vagy &lt;code&gt;datetimezone&lt;/code&gt; típusú értékhez
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Hozzáadja a megadott számú hónapot a dátumhoz.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Azt a <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú eredményt adja vissza, amely <code>numberOfMonths</code> hónap és a(z) <code>dateTime</code> <code>datetime</code> érték összeadásából keletkezik.      <ul>        <li><code>dateTime</code>: Az a <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték, amelyhez hónapokat ad hozzá.</li>        <li><code>numberOfMonths</code>: A hozzáadandó hónapok száma.</li>      </ul>


## Examples

### Example #1 
5 hónap hozzáadása a 2011. 05. 14. dátumot jelölő &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vagy &lt;code&gt;datetimezone&lt;/code&gt; típusú értékhez
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
18 hónap hozzáadása a 2011. 05. 14., 08:15:22 dátumot és időt jelölő &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vagy &lt;code&gt;datetimezone&lt;/code&gt; típusú értékhez
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

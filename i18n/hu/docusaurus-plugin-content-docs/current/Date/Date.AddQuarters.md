---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Hozzáadja a megadott számú negyedévet a dátumhoz.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Azt a <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú eredményt adja vissza, amely <code>numberOfQuarters</code> negyedévnek a(z) <code>dateTime</code> <code>datetime</code> értékhez való hozzáadásával keletkezik.      <ul>      <li><code>dateTime</code>: Az a <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték, amelyhez negyedéveket ad hozzá</li>      <li><code>numberOfQuarters</code>: A hozzáadni kívánt negyedévek száma</li>      </ul>


## Examples

### Example #1 
1 negyedév hozzáadása a 2011. 05. 14. dátumot jelölő &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vagy &lt;code&gt;datetimezone&lt;/code&gt; típusú értékhez
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date

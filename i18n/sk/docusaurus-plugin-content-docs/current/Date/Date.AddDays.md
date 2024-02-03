---
title: Date.AddDays
---

# Date.AddDays


## Description

Pripočíta zadané dni k dátumu.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Vráti výsledok <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code> z pripočítania <code>numberOfDays</code> dní k hodnote <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ku ktorej sa pripočítavajú dni.</li>      <li><code>numberOfDays</code>: Počet dní, ktoré sa majú pripočítať.</li>      </ul>


## Examples

### Example #1 
Pripočítajte 5 dní k hodnote &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; alebo &lt;code&gt;datetimezone&lt;/code&gt; predstavujúcej dátum 14. 5. 2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date

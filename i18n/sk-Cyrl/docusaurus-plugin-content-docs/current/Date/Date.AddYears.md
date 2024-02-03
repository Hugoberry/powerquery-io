---
title: Date.AddYears
---

# Date.AddYears


## Description

Pripočíta zadané roky k dátumu.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Vráti výsledok <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code> z pripočítania <code>numberOfYears</code> rokov k hodnote <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ku ktorej sa pripočítavajú roky.</li>        <li><code>numberOfYears</code>: Počet rokov, ktoré sa majú pripočítať.</li>      </ul>


## Examples

### Example #1 
Pripočítajte 4 roky k hodnote &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; alebo &lt;code&gt;datetimezone&lt;/code&gt; predstavujúcej dátum 14. 5. 2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Pripočítajte 10 rokov k hodnote &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; alebo &lt;code&gt;datetimezone&lt;/code&gt; predstavujúcej dátum 14. 5. 2011 a čas 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

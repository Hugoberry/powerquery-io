---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Pripočíta zadané mesiace k dátumu.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Vráti výsledok <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code> z pripočítania <code>numberOfMonths</code> mesiacov k hodnote <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ku ktorej sa pripočítavajú mesiace.</li>        <li><code>numberOfMonths</code>: Počet mesiacov, ktoré sa majú pripočítať.</li>      </ul>


## Examples

### Example #1 
Pripočítajte 5 mesiacov k hodnote &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; alebo &lt;code&gt;datetimezone&lt;/code&gt; predstavujúcej dátum 14. 5. 2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Pripočítajte 18 mesiacov k hodnote &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; alebo &lt;code&gt;datetimezone&lt;/code&gt; predstavujúcej dátum 14. 5. 2011 a čas 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

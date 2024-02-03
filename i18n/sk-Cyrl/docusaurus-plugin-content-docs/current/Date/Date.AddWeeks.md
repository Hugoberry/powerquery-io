---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Pripočíta zadané týždne k dátumu.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Vráti výsledok <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code> z pripočítania <code>numberOfWeeks</code> týždňov k hodnote <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ku ktorej sa pripočítavajú týždne.</li>      <li><code>numberOfWeeks</code>: Počet týždňov, ktoré sa majú pripočítať.</li>      </ul>


## Examples

### Example #1 
Pripočítajte 2 týždne k hodnote &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; alebo &lt;code&gt;datetimezone&lt;/code&gt; predstavujúcej dátum 14. 5. 2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Pripočíta zadané štvrťroky k dátumu.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Vráti výsledok <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code> z pripočítania <code>numberOfQuarters</code> štvrťrokov k hodnote <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ku ktorej sa pripočítavajú štvrťroky.</li>      <li><code>numberOfQuarters</code>: Počet štvrťrokov, ktoré sa majú pripočítať.</li>      </ul>


## Examples

### Example #1 
Pripočítajte 1 štvrťrok k hodnote &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; alebo &lt;code&gt;datetimezone&lt;/code&gt; predstavujúcej dátum 14. 5. 2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date

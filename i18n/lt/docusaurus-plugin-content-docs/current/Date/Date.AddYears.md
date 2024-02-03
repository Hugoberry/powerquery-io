---
title: Date.AddYears
---

# Date.AddYears


## Description

Prie datos pridedami nurodyti metai.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Pateikiamas <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> rezultatas pridėjus <code>numberOfYears</code> prie <code>datetime</code> reikšmės <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, prie kurios pridedami metai.</li>        <li><code>numberOfYears</code>: pridėtinų metų skaičius.</li>      </ul>


## Examples

### Example #1 
Pridėkite 4 metus prie &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; arba &lt;code&gt;datetimezone&lt;/code&gt; reikšmės, atitinkančios datą 2011 05 14.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Pridėkite 10 metų prie &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; arba &lt;code&gt;datetimezone&lt;/code&gt; reikšmės, atitinkančios datą ir laiką: 2011 05 14, 08:15:22 ryte.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

---
title: Date.AddDays
---

# Date.AddDays


## Description

Prie datos pridedamos nurodytos dienos.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Pateikiamas <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> rezultatas pridėjus <code>numberOfDays</code> d. prie <code>datetime</code> reikšmės <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, prie kurios pridedamos dienos.</li>      <li><code>numberOfDays</code>: pridėtinų dienų skaičius.</li>      </ul>


## Examples

### Example #1 
Pridėkite 5 dienas prie &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; arba &lt;code&gt;datetimezone&lt;/code&gt; reikšmės, atitinkančios datą 2011 05 14.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date

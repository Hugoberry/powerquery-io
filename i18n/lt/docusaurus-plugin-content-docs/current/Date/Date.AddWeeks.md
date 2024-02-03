---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Prie datos pridedamos nurodytos savaitės.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Pateikiamas <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> rezultatas pridėjus <code>numberOfWeeks</code> sav. prie <code>datetime</code> reikšmės <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, prie kurios pridedamos savaitės.</li>      <li><code>numberOfWeeks</code>: pridėtinų savaičių skaičius.</li>      </ul>


## Examples

### Example #1 
Pridėkite 5 savaites prie &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; arba &lt;code&gt;datetimezone&lt;/code&gt; reikšmės, atitinkančios datą 2011 05 14.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

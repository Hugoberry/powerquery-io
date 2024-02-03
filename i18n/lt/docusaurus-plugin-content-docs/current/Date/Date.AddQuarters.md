---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Prie datos pridedami nurodyti ketvirčiai.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Pateikiamas <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> rezultatas pridėjus <code>numberOfQuarters</code> ketv. prie <code>datetime</code> reikšmės <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, prie kurios pridedami ketvirčiai.</li>      <li><code>numberOfQuarters</code>: pridėtinų ketvirčių skaičius.</li>      </ul>


## Examples

### Example #1 
Pridėkite 1 ketvirtį prie &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; arba &lt;code&gt;datetimezone&lt;/code&gt; reikšmės, atitinkančios datą 2011 05 14.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date

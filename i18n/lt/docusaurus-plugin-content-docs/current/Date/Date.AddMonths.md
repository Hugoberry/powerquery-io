---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Prie datos pridedami nurodyti mėnesiai.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Pateikiamas <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> rezultatas pridėjus <code>numberOfMonths</code> mėn. prie <code>datetime</code> reikšmės <code>dateTime</code>.      <ul>       <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, prie kurios pridedami mėnesiai.</li>        <li><code>numberOfMonths</code>: pridėtinų mėnesių skaičius.</li>      </ul>


## Examples

### Example #1 
Pridėkite 5 mėn. prie &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; arba &lt;code&gt;datetimezone&lt;/code&gt; reikšmės, atitinkančios datą 2011 05 14.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Pridėkite 18 mėn. prie &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; arba &lt;code&gt;datetimezone&lt;/code&gt; reikšmės, atitinkančios datą ir laiką: 2011 05 14, 08:15:22 ryte.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

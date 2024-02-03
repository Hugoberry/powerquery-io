---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Dodaje określoną liczbę miesięcy do daty.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Zwraca wynik — w formie wartości typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> — dodania <code>numberOfMonths</code> miesięcy do wartości typu <code>datetime</code> równej <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, do której są dodawane miesiące.</li>        <li><code>numberOfMonths</code>: liczba miesięcy do dodania.</li>      </ul>


## Examples

### Example #1 
Dodaj 5 miesięcy do wartości typu &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; lub &lt;code&gt;datetimezone&lt;/code&gt; reprezentującej datę 2011-05-14.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Dodaj 18 miesięcy do wartości typu &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; lub &lt;code&gt;datetimezone&lt;/code&gt; reprezentującej datę 2011-05-14 i godzinę 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

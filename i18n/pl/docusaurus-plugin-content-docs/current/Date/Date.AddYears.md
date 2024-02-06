---
title: Date.AddYears
---

# Date.AddYears


Dodaje określoną liczbę lat do daty.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Zwraca wynik — w formie wartości typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> — dodania <code>numberOfYears</code> lat do wartości typu <code>datetime</code> równej <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, do której są dodawane lata.</li>        <li><code>numberOfYears</code>: liczba lat do dodania.</li>      </ul>


## Examples

### Example #1 
Dodaj 4 lata do wartości typu &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; lub &lt;code&gt;datetimezone&lt;/code&gt; reprezentującej datę 2011-05-14.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Dodaj 10 lat do wartości typu &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; lub &lt;code&gt;datetimezone&lt;/code&gt; reprezentującej datę 2011-05-14 i godzinę 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

---
title: Date.AddWeeks
---

# Date.AddWeeks


Dodaje określoną liczbę tygodni do daty.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Zwraca wynik — w formie wartości typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> — dodania <code>numberOfWeeks</code> tygodni do wartości typu <code>datetime</code> równej <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, do której są dodawane tygodnie.</li>      <li><code>numberOfWeeks</code>: liczba tygodni do dodania.</li>      </ul>


## Examples

### Example #1 
Dodaj 2 tygodnie do wartości typu &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; lub &lt;code&gt;datetimezone&lt;/code&gt; reprezentującej datę 2011-05-14.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

---
title: Date.AddDays
---

# Date.AddDays


Dodaje określoną liczbę dni do daty.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Zwraca wynik — w formie wartości typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> — dodania <code>numberOfDays</code> dni do wartości typu <code>datetime</code> równej <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, do której są dodawane dni.</li>      <li><code>numberOfDays</code>: liczba dni do dodania.</li>      </ul>


## Examples

### Example #1 
Dodaj 5 dni do wartości typu &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; lub &lt;code&gt;datetimezone&lt;/code&gt; reprezentującej datę 2011-05-14.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date

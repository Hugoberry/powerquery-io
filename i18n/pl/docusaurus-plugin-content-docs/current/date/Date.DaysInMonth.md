---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Zwraca liczbę z przedziału od 28 do 31 wskazującą liczbę dni w miesiącu.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Zwraca liczbę dni w miesiącu z wartości typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> równej <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, z której jest zwracana liczba dni w miesiącu.</li>      </ul>


## Examples

### Example #1 
Liczba dni w miesiącu grudniu przedstawionym w postaci &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date

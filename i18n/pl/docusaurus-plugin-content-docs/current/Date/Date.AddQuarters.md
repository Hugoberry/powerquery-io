---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Dodaje określoną liczbę kwartałów do daty.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Zwraca wynik — w formie wartości typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> — dodania <code>numberOfQuarters</code> kwartałów do wartości typu <code>datetime</code> równej <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, do której są dodawane kwartały.</li>      <li><code>numberOfQuarters</code>: liczba kwartałów do dodania.</li>      </ul>


## Examples

### Example #1 
Dodaj 1 kwartał do wartości typu &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; lub &lt;code&gt;datetimezone&lt;/code&gt; reprezentującej datę 2011-05-14.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date

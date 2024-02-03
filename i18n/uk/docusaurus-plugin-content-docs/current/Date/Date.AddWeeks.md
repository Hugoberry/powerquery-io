---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Додає вказані тижні до дати.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Повертає результат <code>date</code>, <code>datetime</code> або <code>datetimezone</code> додавання <code>numberOfWeeks</code> тиж. до значення <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, до якого додаються тижні.</li>      <li><code>numberOfWeeks</code>: кількість тижнів для додавання.</li>      </ul>


## Examples

### Example #1 
Додавання 2 тижнів до значення &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; або &lt;code&gt;datetimezone&lt;/code&gt;, що представляє дату 14.05.11.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

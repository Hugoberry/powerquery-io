---
title: Date.AddDays
---

# Date.AddDays


## Description

Додає вказані дні до дати.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Повертає результат <code>date</code>, <code>datetime</code> або <code>datetimezone</code> додавання <code>numberOfDays</code> дн. до значення <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, до якого додаються дні.</li>      <li><code>numberOfDays</code>: кількість днів для додавання.</li>      </ul>


## Examples

### Example #1 
Додавання 5 днів до значення &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; або &lt;code&gt;datetimezone&lt;/code&gt;, що представляє дату 14.05.11.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date

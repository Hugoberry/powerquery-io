---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Додає вказані квартали до дати.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Повертає результат <code>date</code>, <code>datetime</code> або <code>datetimezone</code> додавання <code>numberOfQuarters</code> кварт. до значення <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, до якого додаються квартали.</li>      <li><code>numberOfQuarters</code>: кількість кварталів для додавання.</li>      </ul>


## Examples

### Example #1 
Додавання 1 кварталу до значення &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; або &lt;code&gt;datetimezone&lt;/code&gt;, що представляє дату 14.05.11.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date

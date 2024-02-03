---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Додає вказані місяці до дати.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Повертає результат <code>date</code>, <code>datetime</code> або <code>datetimezone</code> додавання <code>numberOfMonths</code> міс. до значення <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, до якого додаються місяці.</li>        <li><code>numberOfMonths</code>: кількість місяців для додавання.</li>      </ul>


## Examples

### Example #1 
Додавання 5 місяців до значення &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; або &lt;code&gt;datetimezone&lt;/code&gt;, що представляє дату 14.05.11.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Додавання 18 місяців до значення &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; або &lt;code&gt;datetimezone&lt;/code&gt;, що представляє дату й час 14.05.11 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

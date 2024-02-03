---
title: Date.AddYears
---

# Date.AddYears


## Description

Додає вказані роки до дати.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Повертає результат <code>date</code>, <code>datetime</code> або <code>datetimezone</code> додавання <code>numberOfYears</code> до значення <code>datetime</code> <code>dateTime</code>.      <ul>       <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, до якого додаються роки.</li>        <li><code>numberOfYears</code>: кількість років для додавання.</li>      </ul>


## Examples

### Example #1 
Додавання 4 років до значення &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; або &lt;code&gt;datetimezone&lt;/code&gt;, що представляє дату 14.05.11.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Додавання 10 років до значення &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; або &lt;code&gt;datetimezone&lt;/code&gt;, що представляє дату й час 14.05.11 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

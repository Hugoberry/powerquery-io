---
title: Date.Day
---

# Date.Day


## Description

Повертає компонент дня.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Повертає компонент дня значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, з якого видобувається компонент дня.</li>      </ul>


## Examples

### Example #1 
Отримання компонента дня значення &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; або &lt;code&gt;datetimezone&lt;/code&gt;, що представляє дату й час 14.05.11 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date

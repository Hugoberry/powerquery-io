---
title: Date.Day
---

# Date.Day


Возвращает компонент дня.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Возвращает компонент дня значения <code>date</code>, <code>datetime</code> или <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, из которого извлекается компонент дня.</li>      </ul>


## Examples

### Example #1 
Получает компонент дня значения &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; или &lt;code&gt;datetimezone&lt;/code&gt;, представляющего дату 14.05.2011 и время 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date

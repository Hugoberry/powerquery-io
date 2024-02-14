---
title: Date.AddMonths
---

# Date.AddMonths


Добавляет указанные месяцы к дате.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Возвращает результат <code>date</code>, <code>datetime</code> или <code>datetimezone</code> после добавления <code>numberOfMonths</code> мес. к значению <code>datetime</code>, <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, к которому добавляются месяцы.</li>        <li><code>numberOfMonths</code>: число месяцев, которое нужно добавить.</li>      </ul>


## Examples

### Example #1 
Добавляет 5 месяцев к значению &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; или &lt;code&gt;datetimezone&lt;/code&gt;, представляющему дату 14.05.2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Добавляет 18 месяцев к значению &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; или &lt;code&gt;datetimezone&lt;/code&gt;, представляющее дату и время 14.05.2011 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date

---
title: Date.AddWeeks
---

# Date.AddWeeks


Добавляет указанные недели к дате.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Возвращает результат <code>date</code>, <code>datetime</code> или <code>datetimezone</code> после добавления <code>numberOfWeeks</code> недель к значению <code>datetime</code>, <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, к которому добавляются недели.</li>      <li><code>numberOfWeeks</code>: число недель, которое нужно добавить.</li>      </ul>


## Examples

### Example #1 
Добавляет 2 недели к значению &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; или &lt;code&gt;datetimezone&lt;/code&gt;, представляющему дату 14.05.2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date

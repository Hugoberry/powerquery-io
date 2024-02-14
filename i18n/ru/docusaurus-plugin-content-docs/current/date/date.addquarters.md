---
title: Date.AddQuarters
---

# Date.AddQuarters


Добавляет указанные кварталы к дате.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Возвращает результат <code>date</code>, <code>datetime</code> или <code>datetimezone</code> после добавления <code>numberOfQuarters</code> кварталов к значению <code>datetime</code>, <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, к которому добавляются кварталы.</li>      <li><code>numberOfQuarters</code>: число кварталов, которое нужно добавить.</li>      </ul>


## Examples

### Example #1 
Добавляет 1 квартал к значению &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; или &lt;code&gt;datetimezone&lt;/code&gt;, представляющему дату 14.05.2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date

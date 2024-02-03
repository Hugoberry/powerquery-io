---
title: Date.AddDays
---

# Date.AddDays


## Description

Добавляет указанные дни к дате.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Возвращает результат <code>date</code>, <code>datetime</code> или <code>datetimezone</code> после добавления <code>numberOfDays</code> дней к значению <code>datetime</code>, <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, к которому добавляются дни.</li>      <li><code>numberOfDays</code>: количество дней, которые нужно добавить.</li>      </ul>


## Examples

### Example #1 
Добавляет 5 дней к значению &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; или &lt;code&gt;datetimezone&lt;/code&gt;, представляющему дату 14.05.2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date

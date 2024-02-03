---
title: Date.AddYears
---

# Date.AddYears


## Description

Добавляет указанное число лет к дате.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Возвращает результат <code>date</code>, <code>datetime</code> или <code>datetimezone</code> после добавления <code>numberOfYears</code> к значению <code>datetime</code>, <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, к которому добавляются годы.</li>        <li><code>numberOfYears</code>: число лет, которое нужно добавить.</li>      </ul>


## Examples

### Example #1 
Добавляет 4 года к значению &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; или &lt;code&gt;datetimezone&lt;/code&gt;, представляющему дату 14.05.2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Добавляет 10 лет к значению &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; или &lt;code&gt;datetimezone&lt;/code&gt;, представляющему дату и время 14.05.2011 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date

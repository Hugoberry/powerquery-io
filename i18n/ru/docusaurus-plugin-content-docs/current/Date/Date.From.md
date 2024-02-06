---
title: Date.From
---

# Date.From


Создает дату из заданного значения.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Возвращает значение <code>date</code> из указанного параметра <code>value</code>. Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").Если параметр <code>value</code> имеет значение <code>null</code>, <code>Date.From</code> возвращает <code>null</code>. Если параметр <code>value</code> имеет значение <code>date</code>, возвращается <code>value</code>. Значения следующих типов можно преобразовать в значение <code>date</code>:      <ul>        <li><code>text</code>: значение <code>date</code> из текстового представления. Дополнительные сведения см. в разделе <code>Date.FromText</code>.</li>        <li><code>datetime</code>: компонент даты <code>value</code>.</li>        <li><code>datetimezone</code>: компонент даты локального эквивалента datetime <code>value</code>.</li>        <li><code>number</code>: компонент даты эквивалента даты и времени OLE-автоматизации, выраженный <code>value</code>.</li>      </ul>Если <code>value</code> относится к другому типу, возвращается ошибка.


## Examples

### Example #1 
Преобразовать &lt;code&gt;43910&lt;/code&gt; в значение &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Преобразовать &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; в значение &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date

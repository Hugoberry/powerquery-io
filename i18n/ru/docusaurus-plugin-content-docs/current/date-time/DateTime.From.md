---
title: DateTime.From
---

# DateTime.From


Создает значение datetime из заданного значения.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Возвращает значение <code>datetime</code> из указанного параметра <code>value</code>. Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").Если параметр <code>value</code> имеет значение <code>null</code>, <code>DateTime.From</code> возвращает <code>null</code>. Если параметр <code>value</code> имеет значение <code>datetime</code>, возвращается <code>value</code>. Значения следующих типов можно преобразовать в значение <code>datetime</code>:      <ul>        <li><code>text</code>: значение <code>datetime</code> из текстового представления. Дополнительные сведения см. в разделе <code>DateTime.FromText</code>.</li>        <li><code>date</code>: <code>datetime</code> с <code>value</code> в качестве компонента даты и <code>12:00:00 AM</code> в качестве компонента времени.</li>        <li><code>datetimezone</code>: <code>datetime</code>, локальный эквивалент <code>value</code>.</li>        <li><code>time</code>: <code>datetime</code> с эквивалентом даты OLE-автоматизации, <code>0</code> в качестве компонента даты и <code>value</code> в качестве компонента времени.</li>        <li><code>number</code>: <code>datetime</code>, эквивалент даты OLE-автоматизации, выраженный <code>value</code>. </li>      </ul>Если <code>value</code> относится к другому типу, возвращается ошибка.


## Examples

### Example #1 
Преобразовать &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; в значение &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Преобразовать &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; в значение &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime

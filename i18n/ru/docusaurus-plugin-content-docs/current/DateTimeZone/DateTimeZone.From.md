---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Создает значение datetimezone из заданного значения.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Возвращает значение <code>datetimezone</code> из указанного параметра <code>value</code>. Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").Если параметр <code>value</code> имеет значение <code>NULL</code>, <code>DateTimeZone.From</code> возвращает <code>NULL</code>. Если параметр <code>value</code> имеет значение <code>datetimezone</code>, возвращается <code>value</code>. Значения следующих типов можно преобразовать в значение <code>datetimezone</code>:      <ul>        <li><code>text</code>: значение <code>datetimezone</code> из текстового представления. Дополнительные сведения см. в разделе <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: <code>datetimezone</code> с <code>value</code> в качестве компонента даты, <code>12:00:00 AM</code> в качестве компонента времени и со смещением, соответствующим местному часовому поясу.</li>        <li><code>datetime</code>: <code>datetimezone</code> с <code>value</code> в качестве даты и времени, а также смещением, соответствующим местному часовому поясу.</li>        <li><code>time</code>: <code>datetimezone</code> с эквивалентом даты OLE-автоматизации, <code>0</code> в качестве компонента даты, <code>value</code> в качестве компонента времени и со смещением, соответствующим местному часовому поясу.</li>        <li><code>number</code>: <code>datetimezone</code> с эквивалентом даты и времени даты OLE-автоматизации, выраженным <code>value</code>, и смещением, соответствующим местному часовому поясу.</li>      </ul>Если <code>value</code> относится к другому типу, возвращается ошибка.


## Examples

### Example #1 
Преобразовать &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; в значение &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone

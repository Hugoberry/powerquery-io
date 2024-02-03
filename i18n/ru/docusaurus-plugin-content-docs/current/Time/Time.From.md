---
title: Time.From
---

# Time.From


## Description

Создает значение времени из заданного значения.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Возвращает значение <code>time</code>, полученное из предоставленного значения <code>value</code>. Также можно указать необязательный параметр <code>culture</code> (например, "ru-RU").Если данное <code>value</code> равно <code>NULL</code>, то <code>Time.From</code> возвращает <code>NULL</code>. Если данное <code>value</code> представляет собой <code>time</code>, то <code>value</code> и будет возвращено. Преобразовать в <code>time</code> можно значения следующих типов:      <ul>        <li><code>text</code>. Значение <code>time</code> берется из текстового представления. Подробнее см. <code>Time.FromText</code>.</li>        <li><code>datetime</code>. Будет использован компонент времени из <code>value</code>.</li>        <li><code>datetimezone</code>. Будет взят компонент времени из datetime-эквивалента <code>value</code> по местному времени.</li>        <li><code>number</code>. Значение <code>time</code> будет эквивалентно доле дня (дроби), выражаемой <code>value</code>. Если значение <code>value</code> отрицательное либо равно единице или выше, возвращается ошибка.</li>      </ul>Если <code>value</code> имеет какой-либо другой тип, возвращается ошибка.


## Examples

### Example #1 
Преобразовать &lt;code&gt;0.7575&lt;/code&gt; в значение &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Преобразовать &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; в значение &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time

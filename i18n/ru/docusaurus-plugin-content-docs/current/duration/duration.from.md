---
title: Duration.From
---

# Duration.From


Создает длительность из заданного значения.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Возвращает значение <code>duration</code>, полученное из предоставленного значения <code>value</code>. Если данное <code>value</code> равно <code>NULL</code>, то <code>Duration.From</code> возвращает <code>NULL</code>. Если данное <code>value</code> представляет собой <code>duration</code>, то <code>value</code> и будет возвращено. Преобразовать в <code>duration</code> можно значения следующих типов:      <ul>        <li><code>text</code>. Значение <code>duration</code> берется из текстового представления прошедшего времени (d.h:m:s). Подробнее см. <code>Duration.FromText</code>.</li>        <li><code>number</code>. Значение <code>duration</code> будет эквивалентно числу дней (в полной и дробной форме), выраженному значением <code>value</code>.</li>      </ul>Если <code>value</code> имеет какой-либо другой тип, возвращается ошибка.


## Examples

### Example #1 
Преобразование &lt;code&gt;2.525&lt;/code&gt; в значение &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration

---
title: Duration.ToText
---

# Duration.ToText


Возвращает текст в формате &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Возвращает в формате "день.час:мин:сек" текстовое представление значения длительности, <code>duration</code>. <ul>        <li><code>duration</code> — <code>длительность</code>, для которой вычисляется текстовое представление.</li>  <li><code>format</code> — <i>(необязательно)</i> устарело, выдает ошибку, если значение не NULL.</li>      </ul>


## Examples

### Example #1 
Преобразовать &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; в текстовое значение.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration

---
title: Duration.FromText
---

# Duration.FromText


Возвращает значение длительности из текстового формата прошедшего времени (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Возвращает значение длительности из указанного текста, <code>text</code>. Эта функция принимает следующие форматы: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (все диапазоны задаются с включением границ)<br />        ddd: число дней.<br />        hh: число часов от 0 до 23.<br />        mm: число минут от 0 до 59.<br />        ss: число секунд от 0 до 59.<br />        ff: число долей секунды от 0 до 9 999 999.


## Examples

### Example #1 
Преобразование &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; в значение &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration

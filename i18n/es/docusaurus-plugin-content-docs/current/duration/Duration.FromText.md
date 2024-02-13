---
title: Duration.FromText
---

# Duration.FromText


Devuelve un valor de duración de los formatos de tiempo transcurrido en forma de texto (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Devuelve un valor de duración del texto especificado <code>text</code>. Esta función puede analizar los formatos siguientes: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Todos los intervalos son inclusivos)<br />        ddd: número de días.<br />        hh: número de horas, entre 0 y 23.<br />        mm: número de minutos, entre 0 y 59.<br />        ss: número de segundos, entre 0 y 59.<br />        ff: fracción de segundos, entre 0 y 9999999.


## Examples

### Example #1 
Convertir &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; en un valor &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration

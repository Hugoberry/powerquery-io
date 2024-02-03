---
title: Duration.FromText
---

# Duration.FromText


## Description

Devolve un valor de duración das formas textuais de tempo transcorrido (d.h: m: s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Devolve un valor de duración a partir do texto especificado, <code>text</code>. Esta función pode analizar os seguintes formatos: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Todos os intervalos son inclusivos)<br />        ddd: número de días.<br />        hh: número de horas, entre 0 e 23.<br />        mm: número de minutos, entre 0 e 59.<br />        ss: número de segundos, entre 0 e 59.<br />        ff: fracción de segundos, entre 0 e 9999999.


## Examples

### Example #1 
Converter &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; nun valor &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration

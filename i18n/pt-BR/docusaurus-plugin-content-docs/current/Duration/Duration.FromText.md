---
title: Duration.FromText
---

# Duration.FromText


## Description

Retorna um valor duration a partir do formato textual de tempo decorrido (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Retorna um valor de duração com base no texto especificado, <code>text</code>. Os seguintes formatos podem ser analisados por esta função: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (Todos os intervalos são inclusivos)<br />        ddd: número de dias.<br />        hh: número de horas, entre 0 e 23.<br />        mm: número de minutos, entre 0 e 59.<br />        ss: número de segundos, entre 0 e 59.<br />        ff: fração de segundos, entre 0 e 9999999.


## Examples

### Example #1 
Converta &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; em um valor &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration

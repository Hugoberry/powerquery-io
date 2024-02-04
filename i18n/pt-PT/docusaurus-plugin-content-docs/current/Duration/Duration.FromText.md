---
title: Duration.FromText
---

# Duration.FromText


## Description

Devolve um valor de duração a partir de formatos de tempo decorrido textuais (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Devolve um valor de duração a partir do texto especificado, <code>text</code>. É possível analisar os formatos que se seguem com esta função: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd.hh:mm(:ss(.ff)) </li> </ul>        <br />        (Todos os intervalos são inclusivos)<br />        ddd: número de dias.<br />        hh: número de horas, entre 0 e 23.<br />        mm: número de minutos, entre 0 e 59.<br />        ss: número de segundos, entre 0 e 59.<br />        ff: fração de segundos, entre 0 e 9999999.


## Examples

### Example #1 
Converter &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; num valor &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration

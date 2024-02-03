---
title: Duration.ToText
---

# Duration.ToText


## Description

Retorna o texto no formato &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Retorna uma representação textual no formato "day.hour:mins:sec" do valor de duração especificado, <code>duration</code>. <ul>        <li><code>duration</code>: uma <code>duration</code> usada para calcular a representação textual.</li>  <li><code>format</code>: <i>[Opcional]</i> Preterido, gerará um erro se não for nulo</li>      </ul>


## Examples

### Example #1 
Converta &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; em um valor de texto.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration

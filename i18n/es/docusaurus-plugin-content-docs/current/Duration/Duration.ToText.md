---
title: Duration.ToText
---

# Duration.ToText


## Description

Devuelve el texto en el formato “d.h:m:s”.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Devuelve una representación textual en el formato "día.hora.minuto:segundo" del valor de duración determinado, <code>duration</code>. <ul>        <li><code>duration</code>: elemento <code>duration</code> mediante el que se calcula la representación textual.</li>  <li><code>format</code>: <i>[opcional]</i> se encuentra en desuso; si no es NULL, se generará un error.</li>      </ul>


## Examples

### Example #1 
Convertir &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; en un valor de texto.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration

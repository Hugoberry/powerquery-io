---
title: Duration.ToText
---

# Duration.ToText


## Description

Devolve o texto no formato &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Devolve unha representación textual en forma de "day.hour:mins:sec" do valor de duración fornecido, <code>duration</code>. <ul>        <li><code>duration</code>: Un valor de <code>duration</code> do que se calcula a representación textual.</li>  <li><code>format</code>: <i>[Opcional]</i> En desuso, producirá un erro se non é nulo</li>      </ul>


## Examples

### Example #1 
Converter &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; nun valor de texto.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration

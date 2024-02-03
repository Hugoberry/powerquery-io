---
title: Duration.ToText
---

# Duration.ToText


## Description

Retorna el text de la forma &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Retorna una representació textual en el format "dia.hora.minut:segon" del valor de durada determinat, <code>duration</code>. <ul>        <li><code>duration</code>: element <code>duration</code> mitjançant el qual es calcula la representació textual.</li>  <li><code>format</code>: <i>[opcional]</i> es troba en desús; si no es nul, es generarà un error.</li>      </ul>


## Examples

### Example #1 
Converteix &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; en un valor de text.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration

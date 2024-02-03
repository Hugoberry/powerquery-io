---
title: Duration.ToText
---

# Duration.ToText


## Description

Restituisce il testo nel formato &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Restituisce una rappresentazione testuale nel formato "day.hour:mins:sec" del valore di durata specificato <code>duration</code>. <ul>        <li><code>duration</code>: elemento <code>duration</code> da cui viene calcolata la rappresentazione testuale.</li>  <li><code>format</code>: <i>[facoltativo]</i> deprecato. Genererà un errore se non è Null</li>      </ul>


## Examples

### Example #1 
Converte &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; in un valore di testo.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration

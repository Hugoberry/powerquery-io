---
title: Duration.ToText
---

# Duration.ToText


Devolve o texto com o formato &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Devolve uma representação textual no formato "dia.hora:mins:seg" do valor de duração especificado, <code>duration</code>. <ul>        <li><code>duration</code>: Uma <code>duração</code> da qual é calculada a representação textual.</li>  <li><code>format</code>: <i>[Opcional]</i> Preterido, será gerado um erro se não for nulo</li>      </ul>


## Examples

### Example #1 
Converter &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; num valor de texto.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration

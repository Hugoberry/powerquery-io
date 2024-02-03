---
title: Number.FromText
---

# Number.FromText


## Description

Crea los números de los formatos de texto comunes (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Devuelve un valor <code>number</code> a partir del valor de texto dado, <code>text</code>. <ul>  <li><code>text</code>: representación de texto de un valor numérico. La representación debe tener un formato numérico común como "15", "3423,10" o "5.0E-10".</li>  <li><code>culture</code>: referencia cultural opcional que controla cómo se interpreta <code>text</code> (por ejemplo, "es-ES").</li> </ul>


## Examples

### Example #1 
Obtener el valor numérico de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obtener el valor numérico de &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting

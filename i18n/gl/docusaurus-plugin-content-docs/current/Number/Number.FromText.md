---
title: Number.FromText
---

# Number.FromText


## Description

Crea números a partir de formatos de texto comúns (&#34;15&#34;, &#34;3.423,10&#34;, &#34;5,0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Devolve un valor <code>number</code> a partir do valor de texto indicado, <code>text</code>. <ul>  <li><code>text</code>: representación textual dun valor numérico. A representación debe estar nun formato de número común: "15", "3423,10", "5,0E-10".</li>  <li><code>culture</code>: cultura opcional que controla como se interpreta <code>text</code> (por exemplo, "gl-ES").</li> </ul>


## Examples

### Example #1 
Obter o valor de número de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obter o valor de número de &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting

---
title: Number.FromText
---

# Number.FromText


## Description

Cria números a partir de formatos de texto comuns (&#34;15&#34;, &#34;3.423,10&#34;, &#34;5,0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Devolve um valor de <code>número</code> a partir do valor de texto especificado, <code>text</code>. <ul>  <li><code>text</code>: a representação textual de um valor de número. A representação tem de estar num formato de número comum, como por exemplo, "15", "3,423.10", "5.0E-10".</li>  <li><code>culture</code>: uma cultura opcional que controla a forma como <code>text</code> é interpretado (por exemplo, "en-US").</li> </ul>


## Examples

### Example #1 
Obter o valor numérico de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obter o valor numérico de &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting

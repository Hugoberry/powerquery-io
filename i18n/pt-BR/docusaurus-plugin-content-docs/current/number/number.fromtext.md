---
title: Number.FromText
---

# Number.FromText


Cria números com formatos de texto comuns (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Retorna um valor <code>número</code> com base no valor de texto especificado, <code>text</code>. <ul>  <li><code>text</code>: a representação textual de um valor numérico. A representação precisa estar em um formato numérico comum, como "15", "3.423,10" ou "5.0E-10".</li>  <li><code>culture</code>: uma cultura opcional que controla como <code>text</code> é interpretado (por exemplo, "pt-br").</li> </ul>


## Examples

### Example #1 
Obtenha o valor numérico &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obtenha o valor numérico &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting

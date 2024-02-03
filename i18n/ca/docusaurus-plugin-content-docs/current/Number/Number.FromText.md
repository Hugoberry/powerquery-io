---
title: Number.FromText
---

# Number.FromText


## Description

Crea nombres a partir de formats de text comuns (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Retorna un valor <code>number</code> a partir del valor de text <code>text</code> proporcionat. <ul>  <li><code>text</code>: representació textual d'un valor de nombre. La representació ha de tenir un format de nombre comú, com ara "15", "3,423.10" o "5.0E-10".</li>  <li><code>culture</code>: referència cultural opcional que controla com s'interpreta <code>text</code> (per exemple, "en-US").</li> </ul>


## Examples

### Example #1 
Permet obtenir el valor numèric de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Permet obtenir el valor numèric de &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting

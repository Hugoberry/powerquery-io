---
title: Text.Combine
---

# Text.Combine


## Description

Concatena uma lista de valores de texto num valor de texto.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Devolve o resultado da combinação da lista de valores de texto, <code>texts</code>, num único valor de texto. Quaisquer valores <code>nulos</code> presentes no <code>texts</code> são ignorados.    É possível especificar uma <code>separator</code> opcional utilizada no texto combinado final.


## Examples

### Example #1 
Combinar os valores de texto &#34;Seattle&#34; e &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Combinar os valores de texto &#34;Seattle&#34; e &#34;WA&#34; separados por uma vírgula e um espaço.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Combine os valores &#34;Seattle&#34;, &lt;code&gt;nulos&lt;/code&gt; e &#34;WA&#34;, separados por uma vírgula e um espaço. (Tenha em atenção que o &lt;code&gt;nulo&lt;/code&gt; é ignorado.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations

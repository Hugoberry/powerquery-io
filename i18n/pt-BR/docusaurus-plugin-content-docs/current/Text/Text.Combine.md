---
title: Text.Combine
---

# Text.Combine


## Description

Concatena uma lista de valores de texto em um único valor de texto.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Retorna o resultado da combinação da lista de valores de texto, <code>texts</code>, em um único valor de texto. Todos os valores <code>nulos</code> presentes em <code>texts</code> serão ignorados.    Um <code>separator</code> opcional usado no texto combinado final pode ser especificado.


## Examples

### Example #1 
Combine os valores &#34;Seattle&#34; e &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Combine os valores de texto &#34;Seattle&#34; e &#34;WA&#34; separados por uma vírgula e um espaço.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Combine os valores &#34;Seattle&#34;, &lt;code&gt;nulos&lt;/code&gt; e &#34;WA&#34;, separados por uma vírgula e um espaço. (Observe que o &lt;code&gt;nulo&lt;/code&gt; é ignorado.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations

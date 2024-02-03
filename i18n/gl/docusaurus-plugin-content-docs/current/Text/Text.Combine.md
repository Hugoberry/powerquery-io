---
title: Text.Combine
---

# Text.Combine


## Description

Concatena unha lista de valores de texto nun valor de texto.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Devolve o resultado de combinar a lista de valores de texto, <code>texts</code>, nun único valor de texto. Ignóranse os valores <code>null</code> presentes en <code>texts</code>.     Pódese especificar un <code>separator</code> opcional usado no texto combinado final.


## Examples

### Example #1 
Combinar os valores de texto &#34;Ourense&#34; e &#34;OU&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Combinar os valores de texto &#34;Ourense&#34; e &#34;OU&#34; separados por unha coma e un espazo.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Combina os valores &#34;Ourense&#34;, &lt;code&gt;null&lt;/code&gt; e &#34;OU&#34;, separados por unha coma e un espazo. (Ten en conta que se ignora o &lt;code&gt;null&lt;/code&gt;).
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations

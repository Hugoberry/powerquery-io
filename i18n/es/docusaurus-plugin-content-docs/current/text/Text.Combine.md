---
title: Text.Combine
---

# Text.Combine


Concatena una lista de valores de texto en un valor de texto.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Devuelve el resultado de combinar la lista de valores de texto, <code>texts</code>, en un único valor de texto. Se omiten los valores <code>null</code> presentes en <code>texts</code>.    Se puede especificar <code>separator</code> opcional usado en el texto combinado final.


## Examples

### Example #1 
Combinar los valores de texto &#34;Seattle&#34; y &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Combine los valores de texto &#34;Seattle&#34; y &#34;WA&#34; separados por una coma y un espacio.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Combine los valores &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; y &#34;WA&#34; separados por una coma y un espacio. (Tenga en cuenta que se ignora &lt;code&gt;null&lt;/code&gt;.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations

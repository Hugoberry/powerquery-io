---
title: Text.Combine
---

# Text.Combine


## Description

Concatena una llista de valors de text en un únic valor de text.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Retorna el resultat de combinar la llista de valors de text, <code>texts</code>, en un únic valor de text. Qualsevol valor <code>null</code> present a <code>texts</code> s’ignora.    Es pot especificar un <code>separator</code> opcional utilitzat al text combinat final.


## Examples

### Example #1 
Combina valors de text &#34;Seattle&#34; i &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Combineu els valors de text &#34;Seattle&#34; i &#34;WA&#34;, separats per una coma i un espai.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Combineu els valors &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; i &#34;WA&#34;, separats per una coma i un espai. (Tingueu en compte que &lt;code&gt;null&lt;/code&gt; s’ignora.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations

---
title: Logical.ToText
---

# Logical.ToText


Retourne le texte &#34; true &#34; ou &#34; false &#34; en fonction d&#39;une valeur logique.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Crée une valeur de texte à partir de la valeur logique <code>logicalValue</code>, soit <code>true</code>, soit <code>false</code>. Si <code>logicalValue</code> n'est pas une valeur logique, une exception est levée.


## Examples

### Example #1 
Crée une valeur de texte à partir du &lt;code&gt;true&lt;/code&gt; logique.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical

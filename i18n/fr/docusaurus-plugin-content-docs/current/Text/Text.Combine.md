---
title: Text.Combine
---

# Text.Combine


Concatène une liste de valeurs de texte dans une seule valeur de texte.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Retourne le résultat de la combinaison de la liste de valeurs de texte, <code>texts</code>, en une seule valeur de texte. Toutes les valeurs de <code>nul</code> présentes dans <code>texts</code> sont ignorées.    Vous pouvez spécifier un <code>separator</code> facultatif utilisé dans le texte combiné final.


## Examples

### Example #1 
Combinez les valeurs de texte &#34; Seattle &#34; et &#34; WA &#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Combinez les valeurs de texte &#34; Seattle &#34; et &#34; WA &#34; séparées par une virgule et un espace.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Combinez les valeurs &#34; Seattle &#34;, &lt;code&gt;nul&lt;/code&gt; et &#34; WA &#34;, séparées par une virgule et un espace. (Notez que le &lt;code&gt;nul&lt;/code&gt; est ignoré.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations

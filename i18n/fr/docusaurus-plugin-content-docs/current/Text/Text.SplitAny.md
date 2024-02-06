---
title: Text.SplitAny
---

# Text.SplitAny


Retourne une liste de valeurs de texte, fractionnées selon un certain nombre de caractères à l&#39;aide du séparateur.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Retourne une liste de valeurs de texte résultant du fractionnement d'une valeur de texte <code>text</code> selon un certain nombre de caractères dans le séparateur spécifié, <code>separators</code>.


## Examples

### Example #1 
Crée une liste de valeurs de texte &#34; Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com &#34;.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations

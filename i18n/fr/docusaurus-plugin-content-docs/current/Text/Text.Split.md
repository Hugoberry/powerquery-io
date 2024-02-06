---
title: Text.Split
---

# Text.Split


Fractionne le texte dans une liste de valeurs de texte en fonction d&#39;un délimiteur spécifié.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Retourne une liste de valeurs de texte résultant du fractionnement d'une valeur de texte <code>text</code> selon le séparateur spécifié, <code>separator</code>.


## Examples

### Example #1 
Crée une liste à partir de la valeur de texte délimitée par &#34; | &#34; &#34; Name|Address|PhoneNumber &#34;.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations

---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Retourne le texte d&#39;une longueur spécifiée en remplissant la fin d&#39;un texte donné.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Retourne une valeur <code>text</code> remplie jusqu'à la longueur <code>count</code> en insérant des espaces à la fin de la valeur de texte <code>text</code>.    Un caractère facultatif <code>character</code> peut être utilisé pour spécifier le caractère utilisé pour le remplissage. Le caractère de remplissage par défaut est un espace.


## Examples

### Example #1 
Remplissez la fin d&#39;une valeur de texte, pour qu&#39;elle soit longue de 10 caractères.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Remplissez la fin d&#39;une valeur de texte avec &#34; | &#34;, pour qu&#39;elle soit longue de 10 caractères.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations

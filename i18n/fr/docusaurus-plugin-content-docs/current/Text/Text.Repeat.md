---
title: Text.Repeat
---

# Text.Repeat


## Description

Retourne une valeur de texte composée du texte d&#39;entrée répété un nombre spécifié de fois.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Retourne une valeur de texte composée du texte d'entrée <code>text</code> répété <code>count</code> fois.


## Examples

### Example #1 
Répète le texte &#34; a &#34; cinq fois.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Répète le texte &#34; helloworld &#34; trois fois.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations

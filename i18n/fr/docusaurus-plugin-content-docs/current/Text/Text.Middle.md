---
title: Text.Middle
---

# Text.Middle


## Description

Retourne la sous-chaîne jusqu&#39;à une longueur spécifique.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Retourne <code>count</code> caractères, ou jusqu'à la fin de <code>text</code>, au décalage <code>start</code>.


## Examples

### Example #1 
Rechercher la sous-chaîne du texte &#34; Hello World &#34; en commençant à l&#39;index 6 et en fractionnant 5 caractères.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Rechercher la sous-chaîne du texte &#34; Hello World &#34; en commençant à l&#39;index 6 jusqu&#39;à la fin.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

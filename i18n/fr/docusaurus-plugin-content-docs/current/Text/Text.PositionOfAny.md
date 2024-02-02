---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Retourne la première position dans la valeur de texte de n&#39;importe quel caractère répertorié (- 1 si introuvable).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Retourne la première position de n'importe quel caractère dans la liste <code>characters</code> trouvée <code>text</code>.
    Un paramètre facultatif <code>occurrence</code> peut être utilisé pour spécifier la position d'occurrence à retourner.


## Examples

### Example #1 
Recherchez la première position de &#34; W &#34; ou &#34; H &#34; dans le texte &#34; Hello, World! &#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Recherchez toutes les positions de &#34; W &#34; ou &#34; H &#34; dans le texte &#34; Hello, World! &#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership

---
title: Text.PositionOf
---

# Text.PositionOf


Retourne la première position de la valeur (- 1 si introuvable).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Retourne la position de l’occurrence spécifiée de la valeur de texte `substring` trouvée dans `text`. Un paramètre facultatif `occurrence` peut être utilisé pour spécifier la position d’occurrence à retourner (première occurrence par défaut). Retourne -1 si `substring` est introuvable.

`comparer` est un `comparateur` utilisé pour contrôler la comparaison. Les comparateurs peuvent être utilisés pour fournir des comparaisons ne respectant pas la casse ou de culture et prenant en charge les paramètres régionaux.

Les comparateurs intégrés suivants sont disponibles dans le langage de formule :

-   `Comparer.Ordinal` : Utilisé pour effectuer une opération exacte ou de comparaison ordinale
-   `Comparer.OrdinalIgnoreCase` : utilisé pour effectuer une comparaison exacte ne respectant pas la casse
-   `Comparer.FromCulture` : utilisé pour effectuer une comparaison prenant en compte la culture


## Examples

### Example #1
Obtient la position de la première occurrence de "World" dans le texte "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Obtient la position de la dernière occurrence de "World" dans "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership

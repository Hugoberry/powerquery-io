---
title: Text.EndsWith
---

# Text.EndsWith


Indique si le texte se termine par la valeur spécifiée.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Indique si le texte spécifié, `text`, se termine par la valeur spécifiée, `substring`. L’indication respecte la casse.

`comparer` est un `comparateur` utilisé pour contrôler la comparaison. Les comparateurs peuvent être utilisés pour fournir des comparaisons ne respectant pas la casse ou de culture et prenant en charge les paramètres régionaux.

Les comparateurs intégrés suivants sont disponibles dans le langage de formule :

-   `Comparer.Ordinal` : Utilisé pour effectuer une opération exacte ou de comparaison ordinale
-   `Comparer.OrdinalIgnoreCase` : utilisé pour effectuer une comparaison exacte ne respectant pas la casse
-   `Comparer.FromCulture` : utilisé pour effectuer une comparaison prenant en compte la culture


## Examples

### Example #1
Vérifiez si "Hello, World" se termine par "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Vérifiez si "Hello, World" se termine par "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership

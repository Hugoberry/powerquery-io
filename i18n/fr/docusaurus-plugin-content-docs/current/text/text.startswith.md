---
title: Text.StartsWith
---

# Text.StartsWith


Indique si le texte démarre par la valeur spécifiée.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Retourne true si la valeur de texte `text` commence par la valeur de texte `substring`.

-   `text` : Une valeur `text` à rechercher.
-   `substring`: Une valeur `text` qui est la sous-chaîne à rechercher dans `text`.
-   `comparer` : *(Facultatif)* Un `Comparer` utilisé pour contrôler la comparaison. Par exemple, `Comparer.OrdinalIgnoreCase` peut être utilisé pour effectuer des recherches non sensibles à la casse.

`comparer` est un `Comparateur` utilisé pour contrôler la comparaison. Les comparateurs peuvent être utilisés pour effectuer des comparaisons non sensibles à la casse ou tenant compte de la culture et de l’environnement local.

Les comparateurs intégrés suivants sont disponibles dans le langage de la formule :

-   `Comparer.Ordinal` : Utilisé pour effectuer une comparaison ordinale exacte.
-   `Comparer.OrdinalIgnoreCase` : Utilisé pour effectuer une comparaison ordinale exacte non sensible à la casse.
-   `Comparer.FromCulture` : Utilisé pour effectuer une comparaison sensible à la culture.


## Examples

### Example #1
Vérifie si le texte "Hello, World" commence par le texte "hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Vérifie si le texte "Hello, World" commence par le texte "Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
En ne tenant pas compte de la casse, vérifiez si le texte "Hello, World" commence par le texte "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership

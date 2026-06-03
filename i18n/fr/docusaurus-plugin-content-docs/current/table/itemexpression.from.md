---
title: ItemExpression.From
---

# ItemExpression.From


Retourne l’arborescence de syntaxe abstraite (AST) pour le corps d’une fonction.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Renvoie l'arbre syntaxique abstrait (AST) du corps de `function`, normalisé en une *expression d'élément* :

-   La fonction doit être une lambda à 1 argument.
-   Toutes les références au paramètre de la fonction sont remplacées par `ItemExpression.Item`.
-   L'AST sera simplifié pour contenir uniquement des nœuds des types suivants :
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `Si`
    -   `FieldAccess`

Une erreur est levée si un AST d'expression d'élément ne peut pas être renvoyé pour le corps de `function`.  
  
Cette fonction est identique à `RowExpression.From`.


## Examples

### Example #1
Retourne l'AST pour le corps de la fonction `each _ <> null`.
```powerquery
ItemExpression.From(each _ <> null)
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "NotEquals",
    Left = ItemExpression.Item,
    Right =
    [
        Kind = "Constant",
        Value = null
    ]
]
```




## Category
Table.Table construction

---
title: RowExpression.From
---

# RowExpression.From


Retourne l’arborescence de syntaxe abstraite (AST) pour le corps d’une fonction.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Renvoie l'arbre syntaxique abstrait (AST) du corps de `function`, normalisé en une *expression de ligne* :

-   La fonction doit être une lambda à 1 argument.
-   Toutes les références au paramètre de fonction sont remplacées par `RowExpression.Row`.
-   Toutes les références aux colonnes sont remplacées par `RowExpression.Column(columnName)`.
-   L'AST sera simplifié pour contenir uniquement des nœuds des types suivants :
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Une erreur est levée si un AST d’expression de ligne ne peut pas être retourné pour le corps de `function`.  
  
Cette fonction est identique à `ItemExpression.From`.


## Examples

### Example #1
Retourne l'AST pour le corps de la fonction `each [CustomerID] = "ALFKI"`.
```powerquery
RowExpression.From(each [CustomerName] = "ALFKI")
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "Equals",
    Left = RowExpression.Column("CustomerName"),
    Right =
    [
        Kind = "Constant",
        Value = "ALFKI"
    ]
]
```




## Category
Table.Table construction

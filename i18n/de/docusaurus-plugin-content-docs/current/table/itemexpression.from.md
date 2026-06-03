---
title: ItemExpression.From
---

# ItemExpression.From


Gibt die abstrakte Syntaxstruktur (Abstract Syntax Tree, AST) für den Text einer Funktion zurück.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Gibt den abstrakten Syntaxbaum (AST) für den Textkörper von `function` zurück, normalisiert in einen *Item-Ausdruck*:

-   Die Funktion muss ein 1-argument-Lambdawert sein.
-   Alle Verweise auf den Funktionsparameter werden durch `ItemExpression.Item` ersetzt.
-   Die AST-Angabe wird so vereinfacht, dass sie nur Knoten der folgenden Typen enthält:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Es wird ein Fehler ausgelöst, wenn für den Textkörper von `function` kein Item-Ausdruck-AST zurückgegeben werden kann.  
  
Diese Funktion ist identisch mit `RowExpression.From`.


## Examples

### Example #1
Gibt die AST-Angabe für den Textkörper der Funktion `each _ <> null` zurück.
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

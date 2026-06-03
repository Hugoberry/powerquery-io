---
title: RowExpression.From
---

# RowExpression.From


Gibt die abstrakte Syntaxstruktur (Abstract Syntax Tree, AST) für den Text einer Funktion zurück.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Gibt den abstrakten Syntaxbaum (AST) für den Textkörper von `function` zurück, normalisiert in einen *Zeilenausdruck*:

-   Die Funktion muss ein 1-argument-Lambdawert sein.
-   Alle Verweise auf den Funktionsparameter werden durch `RowExpression.Row` ersetzt.
-   Alle Verweise auf Spalten werden durch `RowExpression.Column(columnName)` ersetzt.
-   Die AST-Angabe wird so vereinfacht, dass sie nur Knoten der folgenden Typen enthält:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Es wird ein Fehler ausgelöst, wenn keine Zeilenausdruck-AST-Angabe für den Textkörper von `function` zurückgegeben werden kann.  
  
Diese Funktion ist identisch mit `ItemExpression.From`.


## Examples

### Example #1
Gibt die AST-Angabe für den Textkörper der Funktion `each [CustomerID] = "ALFKI"` zurück.
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

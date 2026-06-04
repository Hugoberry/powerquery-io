---
title: ItemExpression.From
---

# ItemExpression.From


Vrátí strom abstraktní syntaxe (AST) pro tělo funkce.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Vrátí abstraktní strom syntaxe (AST) pro text `function` normalizovaný do *výrazu položky*:

-   Funkce musí být lambda s jedním argumentem.
-   Všechny reference na parametr funkce se nahradí za `ItemExpression.Item`.
-   Strom bude zjednodušený a bude obsahovat jenom uzly těchto druhů:
     -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Vyvolá se chyba, pokud pro tělo `function` nelze vrátit AST výrazu položky.  
  
Tato funkce je stejná jako `RowExpression.From`.


## Examples

### Example #1
Vrátí AST pro tělo funkce `each _ <> null`.
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

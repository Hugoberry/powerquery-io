---
title: RowExpression.From
---

# RowExpression.From


Vrátí strom abstraktní syntaxe (AST) pro tělo funkce.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Vrátí abstraktní syntaktický strom (AST) pro tělo `function`, normalizovaný do *řádkového výrazu*:

-   Funkce musí být lambda s jedním argumentem.
-   Všechny reference na parametr funkce se nahradí za `RowExpression.Row`.
-   Všechny odkazy na sloupce jsou nahrazeny výrazem `RowExpression.Column(columnName)`.
-   Strom bude zjednodušený a bude obsahovat jenom uzly těchto druhů:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Pokud pro tělo `function` nejde vrátit abstraktní syntaktický strom (AST) výrazu řádku, vyvolá se chyba.  
  
Tato funkce je stejná jako `ItemExpression.From`.


## Examples

### Example #1
Vrátí AST pro tělo funkce `each [CustomerID] = "ALFKI"`.
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

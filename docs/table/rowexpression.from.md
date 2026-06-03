---
title: RowExpression.From
---

# RowExpression.From


Returns the abstract syntax tree (AST) for the body of a function.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Returns the abstract syntax tree (AST) for the body of `function`, normalized into a *row expression*:

-   The function must be a 1-argument lambda.
-   All references to the function parameter are replaced with `RowExpression.Row`.
-   All references to columns are replaced with `RowExpression.Column(columnName)`.
-   The AST will be simplified to contain only nodes of the kinds:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

An error is raised if a row expression AST cannot be returned for the body of `function`.  
  
This function is identical to `ItemExpression.From`.


## Examples

### Example #1
Returns the AST for the body of the function `each [CustomerID] = "ALFKI"`.
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

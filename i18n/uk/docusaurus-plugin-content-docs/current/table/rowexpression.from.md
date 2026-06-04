---
title: RowExpression.From
---

# RowExpression.From


Повертає дерево абстрактного синтаксису (AST) для тіла функції.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Повертає дерево абстрактного синтаксису (AST) для тіла функції `function`, нормалізоване у *вираз елемента*:

-   Функція має бути лямбда-функцією з 1 аргументом.
-   Усі посилання на параметр функції замінюються на `RowExpression.Row`.
-   Усі посилання на стовпці замінюються на `RowExpression.Column(columnName)`.
-   Дерево абстрактного синтаксису спрощується й міститиме лише такі різновиди вузлів:
    -   `Constant`;
    -   `Invocation`;
    -   `Unary`;
    -   `Binary`;
    -   `If`;
    -   `FieldAccess`;

Якщо для тіла функції `function` не можна повернути дерево абстрактного синтаксису як вираз рядка, повертається помилка.  
  
Ця функція ідентична `ItemExpression.From`.


## Examples

### Example #1
Повертає дерево абстрактного синтаксису для тіла функції `each [CustomerID] = "ALFKI"`.
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

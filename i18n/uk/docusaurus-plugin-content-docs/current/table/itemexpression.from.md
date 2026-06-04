---
title: ItemExpression.From
---

# ItemExpression.From


Повертає дерево абстрактного синтаксису (AST) для тіла функції.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Повертає дерево абстрактного синтаксису (AST) для тіла функції `function`, нормалізоване у *вираз елемента*:

-   Функція має бути лямбда-функцією з 1 аргументом.
-   Усі посилання на параметр функції замінюються на `ItemExpression.Item`.
-   Дерево абстрактного синтаксису спрощується й міститиме лише такі різновиди вузлів:
    -   `Constant`;
    -   `Invocation`;
    -   `Unary`;
    -   `Binary`;
    -   `If`;
    -   `FieldAccess`;

Якщо для тіла функції `function` не можна повернути дерево абстрактного синтаксису у вигляді виразу елемента, повертається помилка.  
  
Ця функція ідентична до `RowExpression.From`.


## Examples

### Example #1
Повертає дерево абстрактного синтаксису для тіла функції `each _ <> null`.
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

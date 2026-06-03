---
title: ItemExpression.From
---

# ItemExpression.From


Возвращает абстрактное синтаксическое дерево (AST) для текста функции.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Возвращает абстрактное синтаксическое дерево (AST) для тела `function`, нормализованное в *выражение элемента*:

-   Функция должна быть лямбда-выражением с одним аргументом.
-   Все ссылки на параметр функции заменяются на `ItemExpression.Item`.
-   AST-древо будет упрощено до варианта, содержащего только узлы следующих видов:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Если для тела `function` невозможно вернуть AST в виде выражения элемента, выдается ошибка.  
  
Эта функция идентична `RowExpression.From`.


## Examples

### Example #1
Возвращает AST для тела функции `each _ <> null`.
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

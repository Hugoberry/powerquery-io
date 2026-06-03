---
title: RowExpression.From
---

# RowExpression.From


Возвращает абстрактное синтаксическое дерево (AST) для текста функции.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Возвращает абстрактное синтаксическое дерево (AST) для текста `function`, нормализованное в *выражение строки*:

-   Функция должна быть лямбда-выражением с одним аргументом.
-   Все ссылки на параметр функции заменяются на `RowExpression.Row`.
-   Все ссылки на столбцы заменяются на `RowExpression.Column(columnName)`.
-   AST-древо будет упрощенным и будет содержать только узлы следующих типов:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Если для текста `function` невозможно вернуть AST в виде выражения строки, выдается ошибка.  
  
Эта функция идентична `ItemExpression.From`.


## Examples

### Example #1
Возвращает AST для текста функции `each [CustomerID] = "ALFKI"`.
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

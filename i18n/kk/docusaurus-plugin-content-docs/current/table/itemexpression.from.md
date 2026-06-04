---
title: ItemExpression.From
---

# ItemExpression.From


Функцияның негізгі мәтіні үшін дерексіз синтаксистік ағашты (AST) қайтарады.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

`function` негізгі бөлігі үшін абстрактілі синтаксис тармағын (AST) қайтарады, ол *элемент өрнегіне* ретінде келтірілген:

-   Функция 1 аргументі бар лямбда функциясы болуы керек.
-   Функция параметріне барлық сілтеме `ItemExpression.Item` мәнімен ауыстырылады.
-   AST келесі түйіндерді ғана қамту үшін жеңілдетіледі:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

`function` негізгі бөлігі үшін AST элемент өрнегін қайтару мүмкін болмаса, қате пайда болады.  
  
Бұл функция `RowExpression.From` мәніне ұқсас.


## Examples

### Example #1
Функцияның `each _ <> null` деген негізгі бөлігі үшін AST қайтарады.
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

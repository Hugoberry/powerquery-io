---
title: RowExpression.From
---

# RowExpression.From


Функцияның негізгі мәтіні үшін дерексіз синтаксистік ағашты (AST) қайтарады.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

`function` негізгі бөлігі үшін абстрактілі синтаксис тармағын (AST) қайтарады, ол *жол өрнегіне* ретінде келтірілген:

-   Функция 1 аргументі бар лямбда функциясы болуы керек.
-   Функция параметріне барлық сілтемелер `RowExpression.Row` мәнімен ауыстырылады.
-   Бағандарға барлық сілтемелер `RowExpression.Column(columnName)` мәнімен ауыстырылады.
-   AST келесі түйіндерді ғана қамту үшін жеңілдетіледі:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

`function` негізгі бөлігі үшін AST жол өрнегін қайтару мүмкін болмаса, қате пайда болады.  
  
Бұл функция `ItemExpression.From` мәніне ұқсас.


## Examples

### Example #1
`Әрбір [CustomerID] = "ALFKI"` функциясының негізгі бөлігі үшін AST қайтарады.
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

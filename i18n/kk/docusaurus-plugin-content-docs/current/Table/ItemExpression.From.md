---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Функцияның негізгі мәтіні үшін дерексіз синтаксистік ағашты (AST) қайтарады.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

<i>Элемент өрнегіне</i> бірыңғайланған <code>function</code> негізгі мәтініне арналған абстрактілі синтаксистік ағашты (AST) қайтарады:<ul>  <li>Функция 1 аргументті лямбда өрнегі болуы керек.</li>  <li>Функция параметріне жасалатын барлық сілтемелер  <code>ItemExpression.Item</code> мәніне ауыстырылады.</li>  <li>AST тармағы келесі түйіндерді қамтитын етіп жеңілдетіледі:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br /><code>function</code> негізгі мәтіні үшін AST ағашын жол өрнегі ретінде қайтару мүмкін болмаса, қате шығады.<br />


## Examples

### Example #1 
Функцияның &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt; деген негізгі бөлігі үшін AST қайтарады
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

---
title: RowExpression.From
---

# RowExpression.From


## Description

Функцияның негізгі мәтіні үшін дерексіз синтаксистік ағашты (AST) қайтарады.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

<i>Жол өрнегіне</i> бірыңғайланған<code>function</code> негізгі мәтініне арналған абстрактілі синтаксистік ағашты (AST) қайтарады:<ul>  <li>Функция 1 аргументті лямбда өрнегі болуы керек.</li>  <li>Функция параметріне жасалатын барлық сілтемелер <code>RowExpression.Row</code> мәніне ауыстырылады.</li>  <li>Бағандарға жасалатын барлық сілтемелер <code>RowExpression.Column(<i>columnName</i>)</code> мәніне ауыстырылады.</li>  <li>AST тармағы келесі түйіндерді қамтитын етіп жеңілдетіледі:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br /><code>function</code> негізгі мәтіні үшін AST ағашын жол өрнегі ретінде қайтару мүмкін болмаса, қате шығады.<br />


## Examples

### Example #1 
&lt;code&gt;Әрбір [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; функциясының негізгі бөлігі үшін AST қайтарады
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

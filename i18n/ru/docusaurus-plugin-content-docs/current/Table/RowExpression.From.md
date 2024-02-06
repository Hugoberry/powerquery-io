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

Возвращает абстрактное синтаксическое дерево (AST) для текста <code>function</code>, нормализованное в <i>выражение строки</i>:<ul>  <li>Функция должна быть лямбда-выражением с одним аргументом.</li>  <li>Все ссылки на параметр функции заменяются на <code>RowExpression.Row</code>.</li>  <li>Все ссылки на столбцы заменяются на <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>Дерево AST будет упрощенным и будет содержать только узлы следующих типов:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Если для текста <code>function</code> невозможно вернуть AST в виде выражения строки, выдается ошибка.<br />


## Examples

### Example #1 
Возвращает AST для тела функции &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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

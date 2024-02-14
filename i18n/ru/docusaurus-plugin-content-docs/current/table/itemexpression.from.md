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

Возвращает абстрактное синтаксическое дерево (AST) для текста <code>function</code>, нормализованное в <i>выражение элемента</i>:<ul>  <li>Функция должна быть лямбда-выражением с одним аргументом.</li>  <li>Все ссылки на параметр функции заменяются на <code>ItemExpression.Item</code>.</li>  <li>Дерево AST будет упрощенным и будет содержать только узлы следующих типов:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Если для текста <code>function</code> невозможно вернуть AST в виде выражения элемента, выдается ошибка.<br />


## Examples

### Example #1 
Возвращает AST для тела функции &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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

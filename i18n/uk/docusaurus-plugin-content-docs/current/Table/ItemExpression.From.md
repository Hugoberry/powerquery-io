---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Повертає дерево абстрактного синтаксису (AST) для тіла функції.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Повертає дерево абстрактного синтаксису для тіла функції <code>function</code>, нормалізованої до <i>виразу елемента</i> відповідно до наведених нижче умов:<ul>  <li>Це має бути LAMBDA-функція з 1 аргументом.</li>  <li>Усі посилання на параметр функції замінюються на <code>ItemExpression.Item</code>.</li>  <li>Дерево абстрактного синтаксису спроститься й міститиме лише вузли таких видів:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Якщо для тіла функції <code>function</code> не можна повернути дерево абстрактного синтаксису як вираз рядка, повертається помилка.<br />


## Examples

### Example #1 
Повертає дерево абстрактного синтаксису для тіла функції &lt;code&gt;each &lt;&gt; null&lt;/code&gt;.
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

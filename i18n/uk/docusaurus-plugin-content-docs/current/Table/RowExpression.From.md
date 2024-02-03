---
title: RowExpression.From
---

# RowExpression.From


## Description

Повертає дерево абстрактного синтаксису (AST) для тіла функції.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Повертає дерево абстрактного синтаксису для тіла функції <code>function</code>, нормалізованої до <i>виразу рядка</i> відповідно до наведених нижче умов:<ul>  <li>Це має бути LAMBDA-функція з 1 аргументом.</li>  <li>Усі посилання на параметр функції замінюються на <code>RowExpression.Row</code>.</li>  <li>Усі посилання на стовпці замінюються на <code>RowExpression.Column(<i>ім’я_стовбця</i>)</code>.</li><li>Дерево абстрактного синтаксису спроститься й міститиме лише вузли таких видів:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Якщо для тіла функції <code>function</code> не можна повернути дерево абстрактного синтаксису як вираз рядка, повертається помилка.<br />


## Examples

### Example #1 
Повертає дерево абстрактного синтаксису для тіла функції &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;.
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

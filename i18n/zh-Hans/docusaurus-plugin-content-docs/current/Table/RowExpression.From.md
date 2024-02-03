---
title: RowExpression.From
---

# RowExpression.From


## Description

返回函数主体的抽象语法树(AST)。


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

返回 <code>function</code> 主体的抽象语法树(AST)，规范化为行表达式<i></i>:<ul>  <li>函数必须为单参数 lambda。</li>  <li>对函数参数的所有引用已替换为 <code>RowExpression.Row</code>。</li>  <li>对列的所有引用已替换为 <code>RowExpression.Column(columnName<i></i>)</code>。</li>  <li>AST 将简化为仅包含以下种类的节点:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />如果无法返回 <code>function</code> 的主体的行表达式 AST，会出现错误。<br />


## Examples

### Example #1 
返回函数 &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; 主体的 AST
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

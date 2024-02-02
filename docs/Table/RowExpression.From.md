---
title: RowExpression.From
---

# RowExpression.From


## Description

Returns the abstract syntax tree (AST) for the body of a function.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Returns the abstract syntax tree (AST) for the body of <code>function</code>, normalized into a <i>row expression</i>:<ul>  <li>The function must be a 1-argument lambda.</li>  <li>All references to the function parameter are replaced with <code>RowExpression.Row</code>.</li>  <li>All references to columns are replaced with <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>The AST will be simplified to contain only nodes of the kinds:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />An error is raised if a row expression AST cannot be returned for the body of <code>function</code>.<br />


## Examples

### Example #1 
Returns the AST for the body of the function &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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

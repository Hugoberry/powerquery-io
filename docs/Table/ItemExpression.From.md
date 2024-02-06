---
title: ItemExpression.From
---

# ItemExpression.From


Returns the abstract syntax tree (AST) for the body of a function.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Returns the abstract syntax tree (AST) for the body of <code>function</code>, normalized into an <i>item expression</i>:<ul>  <li>The function must be a 1-argument lambda.</li>  <li>All references to the function parameter are replaced with <code>ItemExpression.Item</code>.</li>  <li>The AST will be simplified to contain only nodes of the kinds:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />An error is raised if an item expression AST cannot be returned for the body of <code>function</code>.<br />


## Examples

### Example #1 
Returns the AST for the body of the function &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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

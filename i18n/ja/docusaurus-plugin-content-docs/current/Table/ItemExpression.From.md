---
title: ItemExpression.From
---

# ItemExpression.From


関数の本文の抽象構文ツリー (AST) を返します。


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

<i>item expression</i> に正規化された <code>function</code> の本文の抽象構文ツリー (AST) を返します:<ul>  <li>関数は 1 引数ラムダである必要があります。</li>  <li>関数パラメーターへのすべての参照は <code>ItemExpression.Item</code> と置き換えられます。</li>  <li>AST は次の種類のノードだけを含むように簡素化されます:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br /><code>function</code> の本文に対して item 式の AST が返されない場合は、エラーが発生します。<br />


## Examples

### Example #1 
関数 &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt; の本文の AST を返します
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

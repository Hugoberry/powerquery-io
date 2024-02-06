---
title: RowExpression.From
---

# RowExpression.From


関数の本文の抽象構文ツリー (AST) を返します。


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

<i>row expression</i> に正規化された <code>function</code> のの本文の抽象構文ツリー (AST) を返します:<ul>  <li>関数は 1 引数ラムダである必要があります。</li>  <li>関数パラメーターへのすべての参照は <code>RowExpression.Row</code> と置き換えられます。</li>  <li>列へのすべての参照は <code>RowExpression.Column(<i>columnName</i>)</code> と置き換えられます。</li>  <li>AST は次の種類のノードだけを含むように簡素化されます:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br /><code>function</code> の本文に対し row 式の AST が返されない場合は、エラーが発生します。<br />


## Examples

### Example #1 
関数 &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; の本文の AST を返す
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

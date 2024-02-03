---
title: RowExpression.From
---

# RowExpression.From


## Description

함수 본문에 대한 AST(요약 구문 트리)를 반환합니다.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

<i>행 식</i>으로 정규화된 <code>function</code>의 본문에 대한 AST(요약 구문 트리)를 반환합니다.<ul>  <li>함수는 1-인수 람다여야 합니다.</li>  <li>함수 매개 변수에 대한 모든 참조는 <code>RowExpression.Row</code>로 바뀝니다.</li>  <li>열에 대한 모든 참조는 <code>RowExpression.Column(<i>columnName</i>)</code>으로 바뀝니다.</li>  <li>AST는 노드 종류만 포함하도록 단순화됩니다.    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br /><code>function</code>의 본문에 대해 행 식 AST를 반환할 수 없는 경우 오류가 발생합니다.<br />


## Examples

### Example #1 
&lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; 함수의 본문에 대한 AST 반환
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

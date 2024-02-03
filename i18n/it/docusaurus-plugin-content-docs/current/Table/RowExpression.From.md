---
title: RowExpression.From
---

# RowExpression.From


## Description

Restituisce l&#39;albero della sintassi astratta (AST) per il corpo di una funzione.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Restituisce l'albero della sintassi astratta per il corpo di <code>function</code>, normalizzato in una <i>row expression</i>:<ul>  <li>La funzione deve essere un'espressione lambda con 1 argomento.</li>  <li>Tutti i riferimenti al parametro della funzione vengono sostituiti con <code>RowExpression.Row</code>.</li>  <li>Tutti i riferimenti alle colonne vengono sostituiti con <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>L'AST sarà semplificato in modo da contenere solo nodi dei tipi:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Un errore viene generato se non è possibile restituire un'espressione di riga AST per il corpo di <code>function</code>.<br />


## Examples

### Example #1 
Restituisce l&#39;albero sintattico astratto per il corpo della funzione &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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

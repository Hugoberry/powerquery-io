---
title: ItemExpression.From
---

# ItemExpression.From


Restituisce l&#39;albero della sintassi astratta (AST) per il corpo di una funzione.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Restituisce l'albero della sintassi astratta (AST) per il corpo di <code>function</code>, normalizzato in una <i>item expression</i>:<ul>  <li>La funzione deve essere una funzione lambda con 1 argomento.</li>  <li>Tutti i riferimenti al parametro di funzione sono sostituiti con <code>ItemExpression.Item</code>.</li>  <li>L'albero della sintassi astratta verrà semplificato per contenere solo i nodi dei tipi:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Un errore viene generato se non è possibile restituire un'espressione di riga AST per il corpo di <code>function</code>.<br />


## Examples

### Example #1 
Restituisce l&#39;AST per il corpo della funzione &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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

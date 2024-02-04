---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Gibt die abstrakte Syntaxstruktur (Abstract Syntax Tree, AST) für den Text einer Funktion zurück.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Gibt die abstrakte Syntaxstruktur (Abstract Syntax Tree, AST) für den Text von <code>function</code> zurück, normalisiert in einen <i>Elementausdruck</i>:<ul>  <li>Die Funktion muss ein Lambdaausdruck mit einem Argument sein.</li>  <li>Alle Verweise auf den Funktionsparameter werden durch <code>ItemExpression.Item</code> ersetzt.</li>  <li>Die AST-Angabe wird vereinfacht, damit sie nur Knoten der folgenden Typen enthält:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Ein Fehler wird ausgelöst, wenn keine Zeilenausdruck-AST-Angabe für den Textkörper von <code>function</code> zurückgegeben werden kann.<br />


## Examples

### Example #1 
Gibt die AST-Angabe für den Textkörper der Funktion &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt; zurück.
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

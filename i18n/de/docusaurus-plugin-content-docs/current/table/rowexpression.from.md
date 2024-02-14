---
title: RowExpression.From
---

# RowExpression.From


Gibt die abstrakte Syntaxstruktur (Abstract Syntax Tree, AST) für den Text einer Funktion zurück.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Gibt die abstrakte Syntaxstruktur (Abstract Syntax Tree, AST) für den Text von <code>function</code> zurück, normalisiert in einen <i>Zeilenausdruck</i>:<ul>  <li>Die Funktion muss ein Lambdaausdruck mit einem Argument sein.</li>  <li>Alle Verweise auf den Funktionsparameter werden durch <code>RowExpression.Row</code> ersetzt.</li>  <li>Alle Verweise auf Spalten werden durch <code>RowExpression.Column(<i>columnName</i>)</code> ersetzt.</li>  <li>Die AST-Angabe wird vereinfacht, damit sie nur Knoten der folgenden Typen enthält:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Es wird ein Fehler ausgelöst, wenn keine Zeilenausdruck-AST-Angabe für den Textkörper von <code>function</code> zurückgegeben werden kann.<br />


## Examples

### Example #1 
Gibt die AST-Angabe für den Textkörper der Funktion &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; zurück.
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

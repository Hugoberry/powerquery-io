---
title: RowExpression.From
---

# RowExpression.From


## Description

Retourne l’arborescence de syntaxe abstraite (AST) pour le corps d’une fonction.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Retourne l’arborescence de syntaxe abstraite (AST) pour le corps de <code>function</code>, normalisé en une <i>expression de ligne</i> :<ul>   <li> La fonction doit être lambda à 1 argument</li>   <li>Toutes les références au paramètre de fonction sont remplacées par <code>RowExpression.Row</code>.</li>  <li>Toutes les références aux colonnes sont remplacées par <code>RowExpression.Column(<i>columnName</i>)</code>.</li>   <li>L’AST sera simplifié pour contenir uniquement les nœuds des types :    <ul>     <li><code>Constant</code></li>     <li><code>Invocation</code></li>     <li><code>Unary</code></li>     <li><code>Binary</code></li>     <li><code>If</code></li>     <li><code>FieldAccess</code></li>  </ul> </li></ul><br /><br />Une erreur est générée si un AST d’expression de ligne ne peut pas être retourné pour le corps de <code>function</code>.<br />


## Examples

### Example #1 
Retourne l&#39;AST pour le corps de la fonction &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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

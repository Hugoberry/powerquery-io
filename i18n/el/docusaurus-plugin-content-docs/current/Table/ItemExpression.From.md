---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Επιστρέφει το αφηρημένο δέντρο σύνταξης (AST) για το σώμα μιας συνάρτησης.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

Επιστρέφει το δέντρο αφηρημένης σύνταξης (AST) για το σώμα του <code>function</code>, κανονικοποιημένο σε έκφραση <i>στοιχείου</i>:<ul>  <li>Η συνάρτηση πρέπει να είναι 1-όρισμα λάμδα.</li>  <li>Όλες οι αναφορές στην παράμετρο συνάρτησης αντικαθίστανται με <code>ItemExpression.Item</code>.</li>  <li>Το AST θα απλοποιηθεί ώστε να περιέχει μόνο κόμβους των ειδών:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Παρουσιάζεται σφάλμα εάν μια έκφραση στοιχείου AST δεν μπορεί να επιστραφεί για το σώμα του <code>function</code>.<br />


## Examples

### Example #1 
Επιστρέφει το AST για το σώμα της συνάρτησης &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt;
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

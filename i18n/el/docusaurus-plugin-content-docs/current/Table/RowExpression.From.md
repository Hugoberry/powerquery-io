---
title: RowExpression.From
---

# RowExpression.From


## Description

Επιστρέφει το αφηρημένο δέντρο σύνταξης (AST) για το σώμα μιας συνάρτησης.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Details

Επιστρέφει το δέντρο αφηρημένης σύνταξης (AST) για το σώμα του <code>function</code>, κανονικοποιημένη σε έκφραση <i>σειράς</i>:<ul>  <li>Η συνάρτηση πρέπει να είναι 1-όρισμα λάμδα.</li>  <li>Όλες οι αναφορές στην παράμετρο συνάρτησης αντικαθίστανται με <code>RowExpression.Row</code>.</li>  <li>Όλες οι αναφορές σε στήλες αντικαθίστανται με <code>RowExpression.Column(<i>columnName</i>)</code>.</li>  <li>Το AST θα απλοποιηθεί ώστε να περιέχει μόνο κόμβους των ειδών:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Παρουσιάζεται σφάλμα εάν μια παράσταση γραμμής AST δεν μπορεί να επιστραφεί για το σώμα του <code>function</code>.<br />


## Examples

### Example #1 
Επιστρέφει το AST για το σώμα της συνάρτησης &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt;
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

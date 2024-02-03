---
title: ItemExpression.From
---

# ItemExpression.From


## Description

Egy függvény törzséhez tartozó absztrakt szintaxisfát (AST) adja vissza.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Details

A(z) <code>function</code> törzséhez tartozó absztrakt szintaxisfát (AST) adja vissza <i>sorkifejezésbe</i> normalizálva:<ul>  <li>A függvény csak 1 argumentumos lambda lehet.</li>  <li>A függvényparaméterre mutató összes hivatkozás helyére az <code>ItemExpression.Item</code> kerül.</li>  <li>Az AST-t a rendszer egyszerűsíti, hogy csak a következő típusú csomópontokat tartalmazza:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />Akkor jelentkezik hiba, ha nem sikerül egy sorkifejezés AST-jét visszaadni a(z) <code>function</code> törzséhez.<br />


## Examples

### Example #1 
Az &lt;code&gt;each _ &lt;&gt; null&lt;/code&gt; függvény törzséhez tartozó AST-t adja vissza
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
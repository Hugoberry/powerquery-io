---
title: Logical.From
---

# Logical.From


## Description

Iš nurodytos reikšmės sukuriama loginė reikšmė.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Pateikiama <code>logical</code> reikšmė iš nurodytos <code>value</code> reikšmės. Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Logical.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> yra <code>logical</code>, pateikiama <code>value</code>. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į <code>logical</code> reikšmę:      <ul>        <li><code>text</code>: <code>logical</code> reikšmė iš tekstinės reikšmės, <code>true</code> arba <code>false</code>. Išsamiau žr. <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code>, jei <code>value</code> lygi <code>0</code>, kitu atveju – <code>true</code>.</li>      </ul>Jei <code>value</code> yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;2&lt;/code&gt; į &lt;code&gt;logical&lt;/code&gt; reikšmę.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical

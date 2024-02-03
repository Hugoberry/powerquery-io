---
title: Binary.From
---

# Binary.From


## Description

Iš nurodytos reikšmės sukuriama dvejetainė reikšmė


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Pateikiama <code>binary</code> reikšmė iš nurodytos <code>value</code> reikšmės. Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Binary.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>binary</code>, pateikiama <code>value</code>. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į <code>binary</code> reikšmę.      <ul>        <li><code>text</code>: <code>binary</code> reikšmė iš tekstinės pateikties. Išsamiau žr. <code>Binary.FromText</code>.</li>      </ul>Jei <code>value</code> yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1 
Gaukite &lt;code&gt;&#34;1011&#34;&lt;/code&gt; &lt;code&gt;binary&lt;/code&gt; reikšmę.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary

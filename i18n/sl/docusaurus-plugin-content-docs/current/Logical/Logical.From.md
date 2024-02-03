---
title: Logical.From
---

# Logical.From


## Description

Ustvari logično vrednost iz dane vrednosti.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Iz navedene vrednosti <code>value</code> vrne vrednost <code>logical</code>. Če je dana vrednost <code>value</code> <code>null</code>, <code>Logical.From</code> vrne <code>null</code>.  Če je dana vrednost <code>value</code> <code>logical</code>, je vrnjena vrednost <code>value</code>. V vrednost <code>logical</code> lahko pretvorite vrednosti teh vrst:      <ul>        <li><code>text</code>: vrednost <code>logical</code> iz besedilne vrednosti, ki je <code>"true"</code> ali <code>"false"</code>. Za podrobnosti glejte <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code>, če je <code>value</code> enako <code>0</code>, sicer <code>true</code>.</li>      </ul>Če je vrednost <code>value</code> katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1 
Pretvorite &lt;code&gt;2&lt;/code&gt; v vrednost &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical

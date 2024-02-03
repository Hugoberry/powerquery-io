---
title: Double.From
---

# Double.From


## Description

Iz navedene vrednosti ustvari vrednost s plavajočo vejico in dvojno natančnostjo.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Iz navedene vrednosti <code>value</code> vrne vrednost s plavajočo vejico in dvojno natančnostjo <code>number</code>. Če je navedena vrednost <code>value</code> vrste <code>null</code>, <code>Double.From</code> vrne <code>null</code>. Če je navedena vrednost <code>value</code> vrste <code>number</code> v obsegu vrednosti s plavajočo vejico in dvojno natančnostjo, je vrnjena vrednost <code>value</code>, v nasprotnem primeru pa napaka. Če je navedena vrednost <code>value</code> katere koli druge vrste, glejte <code>Number.FromText</code> in jo pretvorite v vrednost <code>number</code>. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").


## Examples

### Example #1 
Poiščite vrednost s plavajočo vejico in dvojno natančnostjo &lt;code&gt;number&lt;/code&gt; za &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting

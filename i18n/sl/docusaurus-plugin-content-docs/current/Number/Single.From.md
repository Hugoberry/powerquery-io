---
title: Single.From
---

# Single.From


## Description

Iz navedene vrednosti ustvari vrednost s plavajočo vejico in enojno natančnostjo.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Iz navedene vrednosti <code>value</code> vrne eno vrednost <code>number</code>. Če je navedena vrednost <code>value</code> vrste <code>null</code>, <code>Single.From</code> vrne <code>null</code>. Če je navedena vrednost <code>value</code> vrste <code>number</code> v obsegu enojne vrednosti, je vrnjena vrednost <code>value</code>, v nasprotnem primeru je vrnjena napaka. Če je navedena vrednost <code>value</code> katere koli druge vrste, glejte <code>Number.FromText</code> in jo pretvorite v vrednost <code>number</code>. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").


## Examples

### Example #1 
Poiščite enojno vrednost &lt;code&gt;number&lt;/code&gt; za &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting

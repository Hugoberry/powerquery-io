---
title: Int64.From
---

# Int64.From


## Description

Iz dane vrednosti ustvari 64-bitno celo število.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Iz navedene vrednosti <code>value</code> vrne 64-bitno celoštevilsko vrednost <code>number</code>. Če je navedena vrednost <code>value</code> vrste <code>null</code>, <code>Int64.From</code> vrne <code>null</code>. Če je navedena vrednost <code>value</code> vrste <code>number</code> v obsegu 64-bitnega celega števila in brez ulomka, je vrnjena vrednost <code>value</code>. Če ima ulomek, je število zaokroženo z določenim načinom zaokroževanja. Privzeti način zaokroževanja je <code>RoundingMode.ToEven</code>. Če je navedena vrednost <code>value</code> katere koli druge vrste, glejte <code>Number.FromText</code> in jo pretvorite v vrednost <code>number</code>. Glejte <code>Number.Round</code> za načine zaokroževanja, ki so na voljo. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").


## Examples

### Example #1 
Poiščite 64-bit celo število z vrednostjo &lt;code&gt;number&lt;/code&gt; za &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Pridobite 64-bitno celoštevilsko vrednost &lt;code&gt;število&lt;/code&gt; &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; z načinom zaokroževanja &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
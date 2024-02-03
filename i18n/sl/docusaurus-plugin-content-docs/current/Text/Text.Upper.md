---
title: Text.Upper
---

# Text.Upper


## Description

Pretvori vse znake v velike črke.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Vrne rezultat pretvorbe vseh znakov v <code>text</code> v velike črke. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").


## Examples

### Example #1 
Poiščite besedilo &#34;aBcD&#34;, zapisano z velikimi črkami.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations

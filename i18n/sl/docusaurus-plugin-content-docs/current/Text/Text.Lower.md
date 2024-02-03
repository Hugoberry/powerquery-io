---
title: Text.Lower
---

# Text.Lower


## Description

Pretvori vse znake v male črke.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Vrne rezultat pretvorbe vseh znakov v <code>text</code> v male črke. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").


## Examples

### Example #1 
Poiščite besedilo &#34;AbCd&#34;, zapisano z malimi črkami.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations

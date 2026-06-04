---
title: Text.Upper
---

# Text.Upper


Pretvori vse znake v velike črke.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Vrne rezultat pretvorbe vseh znakov v `text` v velike črke. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI").


## Examples

### Example #1
Poiščite besedilo"aBcD", zapisano z velikimi črkami.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations

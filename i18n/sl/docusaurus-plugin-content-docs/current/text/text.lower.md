---
title: Text.Lower
---

# Text.Lower


Pretvori vse znake v male črke.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Vrne rezultat pretvorbe vseh znakov v `text` v male črke. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI").


## Examples

### Example #1
Poiščite besedilo"AbCd", zapisano z malimi črkami.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations

---
title: Value.FromText
---

# Value.FromText


Skapar ett starkt typifierat värde från en textrepresentation.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Avkodar ett värde från en textrepresentation, <code>text</code>, och tolkar det som ett värde av en lämplig typ.    <code>Value.FromText</code> tar ett textvärde och returnerar ett tal, ett logiskt värde, ett nullvärde, ett datetime-värde, ett varaktighetsvärde eller ett textvärde. Det tomma textvärdet tolkas som ett null-värde.    En valfri <code>culture</code> kan även anges (till exempel, "en-US").



## Category
Text.Conversions from and to text

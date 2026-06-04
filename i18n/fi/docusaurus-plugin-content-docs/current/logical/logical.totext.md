---
title: Logical.ToText
---

# Logical.ToText


Palauttaa tekstin true tai false, kun annetaan looginen arvo.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Luo loogisesta arvosta `logicalValue` tekstiarvon, joko `true` tai `false`. Jos `logicalValue` arvo ei ole looginen, ilmenee virhe.


## Examples

### Example #1
Luo tekstiarvo loogisesta kohteesta `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical

---
title: Logical.ToText
---

# Logical.ToText


Vrne besedilo"true"ali"false", če navedete logično vrednost.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Ustvari besedilno vrednost iz logične vrednosti `logicalValue`, ki je `true` ali `false`. Če `logicalValue` ni logična vrednost, pride do napake.


## Examples

### Example #1
Ustvarite besedilno vrednost iz logične vrednosti `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical

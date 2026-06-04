---
title: Logical.ToText
---

# Logical.ToText


Pateikia tekstą kaip „true“ arba „false“ nurodžius loginę reikšmę.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Sukuriama tekstinė reikšmė iš loginės reikšmės `logicalValue`, `true` arba `false`. Jei `logicalValue` nėra loginė reikšmė, pateikiama klaida.


## Examples

### Example #1
Sukurkite tekstinę reikšmę iš loginės reikšmės `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical

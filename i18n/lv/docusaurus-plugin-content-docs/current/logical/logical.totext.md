---
title: Logical.ToText
---

# Logical.ToText


Tiek atgriezta teksta vērtība true vai false atbilstoši norādītajai loģiskajai vērtībai.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

No loģiskās vērtības `logicalValue`, kas var būt `true` vai `false`, tiek izveidota teksta vērtība. Ja `logicalValue` nav loģiskā vērtība, tiek izraisīta kļūda.


## Examples

### Example #1
Izveidojiet teksta vērtību no loģiskās vērtības `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical

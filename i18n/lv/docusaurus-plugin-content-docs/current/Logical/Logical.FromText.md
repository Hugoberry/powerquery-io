---
title: Logical.FromText
---

# Logical.FromText


## Description

No teksta vērtībām true un false tiek izveidota loģiskā vērtība.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

No teksta vērtības <code>text</code>, kas var būt true vai false, tiek izveidota loģiskā vērtība. Ja vērtībā <code>text</code> ir ietverta cita virkne, tiek aktivizēts izņēmums. Teksta vērtība <code>text</code> ir reģistrjutīga.


## Examples

### Example #1 
No teksta virknes true tiek izveidota loģiskā vērtība.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Izveidojiet loģisko vērtību no teksta virknes a.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical

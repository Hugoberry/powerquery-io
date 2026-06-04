---
title: Logical.FromText
---

# Logical.FromText


Ustvari logično vrednost iz besedilnih vrednosti"true"in"false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Ustvari logično vrednost iz besedilne vrednosti `text`, ki je"true"ali"false". Če `text` vsebuje drugačen niz, pride do napake. Besedilna vrednost `text` ne razlikuje med velikimi in malimi črkami.


## Examples

### Example #1
Ustvarite logično vrednost iz besedilnega niza"true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Ustvarite logično vrednost iz besedilnega niza"a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical

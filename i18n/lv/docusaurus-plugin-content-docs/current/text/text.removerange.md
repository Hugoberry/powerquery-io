---
title: Text.RemoveRange
---

# Text.RemoveRange


Tiek noņemts rakstzīmju skaits, sākot no norādītās nobīdes.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Atgriež teksta vērtības `text` kopiju, kurā noņemtas visas rakstzīmes no pozīcijas `offset`. Var lietot neobligātu parametru `count`, lai norādītu noņemamo rakstzīmju skaitu. `count` noklusējuma vērtība ir 1. Pozīcijas vērtības sākas ar 0.


## Examples

### Example #1
Noņemiet 1 rakstzīmi no teksta vērtības ABEFC 2. pozīcijā.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Noņemiet divas rakstzīmes no teksta vērtības ABEFC, sākot no 2. pozīcijas.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification

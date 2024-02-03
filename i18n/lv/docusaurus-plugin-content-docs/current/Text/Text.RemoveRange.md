---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Tiek noņemts rakstzīmju skaits, sākot no norādītās nobīdes.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Atgriež teksta vērtības <code>text</code> kopiju, kurā noņemtas visas rakstzīmes no pozīcijas <code>offset</code>.    Var lietot neobligātu parametru <code>count</code>, lai norādītu noņemamo rakstzīmju skaitu. <code>count</code> noklusējuma vērtība ir 1. Pozīcijas vērtības sākas ar 0.


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

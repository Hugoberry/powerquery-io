---
title: Text.Replace
---

# Text.Replace


Tekstā tiek aizstāti visi norādītās apakšvirknes gadījumi.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Tiek atgriezts rezultāts, kas iegūts, aizstājot visus teksta vērtības `old` gadījumus teksta vērtībā `text` ar teksta vērtību `new`. Šī funkcija ir reģistrjutīga.


## Examples

### Example #1
Visi “the” gadījumi teikumā tiek aizstāti ar “a”.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification

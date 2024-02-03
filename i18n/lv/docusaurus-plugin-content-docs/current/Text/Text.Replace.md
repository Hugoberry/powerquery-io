---
title: Text.Replace
---

# Text.Replace


## Description

Tekstā tiek aizstāti visi norādītās apakšvirknes gadījumi.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Tiek atgriezts rezultāts, kas iegūts, aizstājot visus teksta vērtības <code>old</code> gadījumus teksta vērtībā <code>text</code> ar teksta vērtību <code>new</code>. Šī funkcija ir reģistrjutīga.


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

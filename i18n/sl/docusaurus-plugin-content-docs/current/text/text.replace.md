---
title: Text.Replace
---

# Text.Replace


Zamenja vse pojavitve danega podniza v besedilu.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Vrne rezultat zamenjave vseh pojavitev besedilne vrednosti `old` v besedilni vrednosti `text` z besedilno vrednostjo `new`. Ta funkcija razlikuje med velikimi in malimi črkami.


## Examples

### Example #1
Zamenjajte vse pojavitve besede"the"v stavku z besedo"a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification

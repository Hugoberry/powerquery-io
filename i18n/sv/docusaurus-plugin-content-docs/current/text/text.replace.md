---
title: Text.Replace
---

# Text.Replace


Ersätter alla förekomster av den angivna delsträngen i texten.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Returnerar resultatet från ersättningen av alla förekomster av textvärdet `old` i textvärdet `text` med textvärdet `new`. Den här funktionen är skiftlägeskänslig.


## Examples

### Example #1
Ersätt varje förekomst av "the" i en mening med "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification

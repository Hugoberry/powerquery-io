---
title: Text.End
---

# Text.End


Pateikiami paskutiniai teksto simboliai.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Pateikiama `text` reikšmė, kuri yra paskut. `count` `text` reikšmės `text` simbol.


## Examples

### Example #1
Gaukite 5 paskutinius teksto „Hello, World“ simbolius.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

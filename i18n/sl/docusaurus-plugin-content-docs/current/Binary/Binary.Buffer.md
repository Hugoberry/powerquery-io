---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Shrani dvojiško vrednost v medpomnilnik.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Shrani dvojiško vrednost v medpomnilnik. Rezultat tega klica je trajna dvojiška vrednost, kar pomeni, da bo imel določljivo dolžino in vrstni red bajtov.


## Examples

### Example #1 
Ustvarite trajno različico dvojiške vrednosti.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary

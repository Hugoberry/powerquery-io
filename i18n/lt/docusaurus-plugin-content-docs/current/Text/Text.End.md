---
title: Text.End
---

# Text.End


## Description

Pateikiami paskutiniai teksto simboliai.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Pateikiama <code>text</code> reikšmė, kuri yra paskut. <code>count</code> <code>text</code> reikšmės <code>text</code> simbol.


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

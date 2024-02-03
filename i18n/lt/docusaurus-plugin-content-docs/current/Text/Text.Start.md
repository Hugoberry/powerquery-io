---
title: Text.Start
---

# Text.Start


## Description

Pateikiama teksto pradžia.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Pateikiami <code>text</code> pirmieji <code>count</code> simb. kaip tekstinė reikšmė.


## Examples

### Example #1 
Gaukite 5 pirmuosius teksto „Hello, World“ simbolius.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction

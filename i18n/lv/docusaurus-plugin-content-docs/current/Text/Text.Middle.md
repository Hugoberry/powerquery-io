---
title: Text.Middle
---

# Text.Middle


## Description

Atgriež apakšvirkni ar norādīto garumu.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Atgriež <code>count</code> rakstzīmes vai līdz <code>text</code> beigām; pie nobīdes <code>start</code>.


## Examples

### Example #1 
Atrod apakšvirkni tekstā “Hello World”, kas sākas 6. indeksā un kuras diapazons ir 5 rakstzīmes.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Atrod apakšvirkni tekstā “Hello World”, kas sākas 6. indeksā un kuras diapazons ir līdz beigām.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

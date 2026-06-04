---
title: Text.Middle
---

# Text.Middle


Atgriež apakšvirkni ar norādīto garumu.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Atgriež `count` rakstzīmes vai līdz `text` beigām; pie nobīdes `start`.


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


### Example #3
Atrod apakšvirkni tekstā “Hello World”, kas sākas 0. indeksā un kuras diapazons ir 2 rakstzīmes.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction

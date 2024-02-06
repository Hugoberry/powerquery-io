---
title: Text.Middle
---

# Text.Middle


Zwraca podciąg do określonej długości.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Zwraca ciąg o długości <code>count</code> znaków lub do końca elementu <code>text</code> przy przesunięciu <code>start</code>.


## Examples

### Example #1 
Znajdź podciąg w tekście „Hello World”, począwszy od indeksu 6 do 5. znaku.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Znajdź podciąg w tekście „Hello World”, począwszy od indeksu 6 do końca.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

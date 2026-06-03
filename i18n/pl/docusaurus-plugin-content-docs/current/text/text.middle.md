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

Zwraca ciąg o długości `count` znaków lub do końca elementu `text` przy przesunięciu `start`.


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


### Example #3
Znajdź podciąg w tekście „Hello World”, począwszy od indeksu 0 do 2. znaku.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction

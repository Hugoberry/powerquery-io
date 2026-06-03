---
title: Text.Remove
---

# Text.Remove


Usuwa wszystkie wystąpienia danego znaku lub listy znaków z wejściowej wartości tekstowej.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Zwraca kopię wartości tekstowej `text`, z której zostały usunięte wszystkie znaki od `removeChars`.


## Examples

### Example #1
Usuń znaki , i ; z wartości tekstowej.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification

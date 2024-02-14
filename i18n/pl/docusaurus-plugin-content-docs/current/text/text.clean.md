---
title: Text.Clean
---

# Text.Clean


Zwraca wartość tekstową, z której zostały usunięte wszystkie znaki kontrolne.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Zwraca wartość tekstową, z której zostały usunięte wszystkie znaki kontrolne (<code>text</code>).


## Examples

### Example #1 
Usuń znaki wysuwu wiersza i inne znaki kontrolne z wartości tekstowej.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations

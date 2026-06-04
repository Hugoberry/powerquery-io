---
title: Text.Clean
---

# Text.Clean


Returnează valoarea text cu toate caracterele de control eliminate.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Returnează o valoare text cu toate caracterele de control `text` eliminate.


## Examples

### Example #1
Eliminați sfârșiturile de linii și alte caractere de control dintr-o valoare text.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations

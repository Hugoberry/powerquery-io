---
title: Text.Insert
---

# Text.Insert


Wstawia jedną wartość tekstową do innej na określonej pozycji.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Zwraca wynik wstawienia wartości tekstowej <code>newText</code> do wartości tekstowej <code>text</code> na pozycji <code>offset</code>. Pozycje są liczone od 0.


## Examples

### Example #1 
Wstaw „C” między „B” i „D” w ciągu „ABD”.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification

---
title: Text.Insert
---

# Text.Insert


Vstavi eno besedilno vrednost v drugo na danem položaju.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Vrne rezultat vstavljanja besedilne vrednosti `newText` v besedilno vrednost `text` na položaju `offset`. Položaji se začnejo s številom 0.


## Examples

### Example #1
Vstavite"C"med"B"in"D"v"ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification

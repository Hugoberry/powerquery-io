---
title: Text.Remove
---

# Text.Remove


Uklanja sva pojavljivanja datog znaka ili liste znakova iz ulazne tekstualne vrednosti.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Vraća kopiju tekstualne vrednosti `text` iz koje su uklonjeni svi znakovi iz `removeChars`.


## Examples

### Example #1
Uklanjanje znakova , i ; iz tekstualne vrednosti.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification

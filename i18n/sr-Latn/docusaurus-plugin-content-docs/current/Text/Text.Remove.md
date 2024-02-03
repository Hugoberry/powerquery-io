---
title: Text.Remove
---

# Text.Remove


## Description

Uklanja sva pojavljivanja datog znaka ili liste znakova iz ulazne tekstualne vrednosti.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Vraća kopiju tekstualne vrednosti <code>text</code> iz koje su uklonjeni svi znakovi iz <code>removeChars</code>.  


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

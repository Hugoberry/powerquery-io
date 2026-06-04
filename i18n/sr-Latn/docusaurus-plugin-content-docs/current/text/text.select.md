---
title: Text.Select
---

# Text.Select


Bira sva pojavljivanja datog znaka ili liste znakova iz ulazne tekstualne vrednosti.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Vraća kopiju tekstualne vrednosti `text` iz koje su uklonjeni svi znakovi koji nisu u `selectChars`.


## Examples

### Example #1
Bira sve znakove iz opsega od „a“ do „ž“ iz tekstualne vrednosti.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification

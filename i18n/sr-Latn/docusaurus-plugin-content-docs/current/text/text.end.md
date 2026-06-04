---
title: Text.End
---

# Text.End


Vraća poslednje znakove iz teksta.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Vraća `text` vrednost koja predstavlja poslednjih `count` znakova `text` vrednosti `text`.


## Examples

### Example #1
Preuzimanje poslednjih 5 znakova iz teksta „Hello, World“.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

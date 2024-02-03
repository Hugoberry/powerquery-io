---
title: Text.Middle
---

# Text.Middle


## Description

A sztringrészt adja vissza a megadott hosszig.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

<code>count</code> karaktert ad vissza, vagy a(z) <code>text</code> végéig; a(z) <code>start</code> eltolásnál.


## Examples

### Example #1 
A „Hello World” szöveg 6. indexétől kezdődő 5 karakterből álló sztringrész keresése.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
A „Hello World” szöveg 6. indexétől kezdődő és a szöveg végéig tartó sztringrész keresése.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

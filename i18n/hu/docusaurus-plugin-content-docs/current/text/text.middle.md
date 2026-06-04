---
title: Text.Middle
---

# Text.Middle


A sztringrészt adja vissza a megadott hosszig.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

`count` karaktert ad vissza, vagy a(z) `text` végéig; a(z) `start` eltolásnál.


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


### Example #3
A „Hello World” szöveg 0. indexétől kezdődő 2 karakterből álló sztringrész keresése.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction

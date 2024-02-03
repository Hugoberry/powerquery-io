---
title: Text.Middle
---

# Text.Middle


## Description

Vraća podnisku do određene dužine.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Vraća <code>count</code> znakova ili do kraja <code>text</code>; na pomaku <code>start</code>.


## Examples

### Example #1 
Pronađite podnisku iz teksta „Zdravo svete“ počev od indeksa 6, koja sadrži 5 znakova.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Pronađite podnisku iz teksta „Zdravo svete“ počev od indeksa 6 pa do kraja.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

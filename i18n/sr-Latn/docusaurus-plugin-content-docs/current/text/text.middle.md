---
title: Text.Middle
---

# Text.Middle


Vraća podnisku do određene dužine.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Vraća `count` znakova ili do kraja `text`; na pomaku `start`.


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


### Example #3
Pronađite podnisku iz teksta „Zdravo Svete“ počev od indeksa 0, koja sadrži 2 znaka.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction

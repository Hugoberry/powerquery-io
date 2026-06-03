---
title: Text.Middle
---

# Text.Middle


De subtekenreeks tot een bepaalde lengte retourneren.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

`count` tekens retourneren of retourneren tot het einde van `text`; bij de verschuiving `start`.


## Examples

### Example #1
De subtekenreeks in de tekst "Hallo Wereld" opzoeken die begint bij index 6 en vijf tekens omvat.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
De subtekenreeks in de tekst 'Hallo Wereld' opzoeken vanaf index 6 tot het einde.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
De subtekenreeks zoeken in de tekst 'Hallo wereld' beginnend bij index nul en die twee tekens omvat.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction

---
title: Text.Middle
---

# Text.Middle


Returnerer delstrengen op til en specifik længde.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Returns `count` tegn, eller indtil enden på `text`; ved forskydningen `start`.


## Examples

### Example #1
Find delstrengen fra teksten "Hello World", der starter ved indeks 6 og strækker sig over fem tegn.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Find delstrengen fra teksten "Hello World", der starter ved indeks 6 og fortsætter til enden.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Find understrengen fra teksten "Hello World" med start ved indeks 0, der strækker sig over 2 tegn.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction

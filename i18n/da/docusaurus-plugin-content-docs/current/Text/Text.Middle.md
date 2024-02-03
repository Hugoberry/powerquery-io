---
title: Text.Middle
---

# Text.Middle


## Description

Returnerer delstrengen op til en specifik længde.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Returns <code>count</code> tegn, eller indtil enden på <code>text</code>; ved forskydningen <code>start</code>.


## Examples

### Example #1 
Find delstrengen fra teksten &#34;Hello World&#34;, der starter ved indeks 6 og strækker sig over fem tegn.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Find delstrengen fra teksten &#34;Hello World&#34;, der starter ved indeks 6 og fortsætter til enden.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

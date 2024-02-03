---
title: Text.Middle
---

# Text.Middle


## Description

De subtekenreeks tot een bepaalde lengte retourneren.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

<code>count</code> tekens retourneren of retourneren tot het einde van <code>text</code>; bij de verschuiving <code>start</code>.


## Examples

### Example #1 
De subtekenreeks in de tekst &#34;Hallo Wereld&#34; opzoeken die begint bij index 6 en vijf tekens omvat.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
De subtekenreeks in de tekst &#39;Hallo Wereld&#39; opzoeken vanaf index 6 tot het einde.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

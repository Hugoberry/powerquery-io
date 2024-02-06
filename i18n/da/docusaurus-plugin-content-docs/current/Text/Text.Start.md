---
title: Text.Start
---

# Text.Start


Returnerer starten af teksten.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

Returnerer de første <code>count</code> tegn af <code>text</code> som en tekstværdi.


## Examples

### Example #1 
Hent de første fem tegn i &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction

---
title: Text.Range
---

# Text.Range


Vráti podreťazec nájdený pri posune.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Vráti podreťazec z textu `text` nájdený pri posune `offset`. Na zadanie počtu znakov, ktoré sa majú vrátiť, možno zahrnúť voliteľný parameter `count`. Ak nie je k dispozícii dostatok znakov, zobrazí sa chyba.


## Examples

### Example #1
Nájdite podreťazec z textu "Hello World" začínajúci s indexom 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Nájdite podreťazec z textu "Hello World Hello" začínajúci s indexom 6 a s rozsahom 5 znakov.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

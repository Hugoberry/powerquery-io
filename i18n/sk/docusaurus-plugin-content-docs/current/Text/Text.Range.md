---
title: Text.Range
---

# Text.Range


## Description

Vráti podreťazec nájdený pri posune.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Vráti podreťazec z textu <code>text</code> nájdený pri posune <code>offset</code>.    Na zadanie počtu znakov, ktoré sa majú vrátiť, možno zahrnúť voliteľný parameter <code>count</code>. Ak počet znakov nie je dostatočný, vráti sa chyba.


## Examples

### Example #1 
Nájdite podreťazec z textu &#34;Hello World&#34; začínajúci s indexom 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Nájdite podreťazec z textu &#34;Hello World Hello&#34; začínajúci s indexom 6 a s rozsahom 5 znakov.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

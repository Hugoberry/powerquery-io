---
title: Text.Middle
---

# Text.Middle


## Description

Vráti podreťazec s maximálnou zadanou dĺžkou.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Vráti znaky (<code>count</code>) alebo reťazec do konca položky <code>text</code> s posunom <code>start</code>.


## Examples

### Example #1 
Nájdite podreťazec z textu &#34;Hello World&#34; začínajúci s indexom 6 a s rozsahom 5 znakov.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Nájdite podreťazec z textu &#34;Hello World&#34; začínajúci s indexom 6 a pokračujúcim až do konca.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

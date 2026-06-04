---
title: Text.Middle
---

# Text.Middle


Vráti podreťazec s maximálnou zadanou dĺžkou.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Vráti znaky (`count`) alebo reťazec do konca položky `text` s posunom `start`.


## Examples

### Example #1
Nájdite podreťazec z textu "Hello World" začínajúci s indexom 6 a s rozsahom 5 znakov.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Nájdite podreťazec z textu "Hello World" začínajúci s indexom 6 a pokračujúcim až do konca.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Nájdite podreťazec v texte "Hello World" začínajúci na indexe 0 a s dĺžkou 2 znaky.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction

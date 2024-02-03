---
title: Text.Range
---

# Text.Range


## Description

Vrátí dílčí řetězec nalezený na posunu.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Vrátí dílčí řetězec z textu <code>text</code> nalezený na posunu <code>offset</code>.    K určení počtu vrácených znaků se může použít volitelný parametr <code>count</code>. Vrátí chybu, když znaků není dost.


## Examples

### Example #1 
Najde dílčí řetězec z textu „Hello World“ začínající na indexu 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Najde dílčí řetězec z textu „Hello World Hello“ začínající na indexu 6 po odsazení 5 znaků.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

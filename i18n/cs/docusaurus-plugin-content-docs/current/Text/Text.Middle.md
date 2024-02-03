---
title: Text.Middle
---

# Text.Middle


## Description

Vrátí podřetězec do zadané délky.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Vrátí <code>count</code> znaků nebo do konce řetězce <code>text</code> od pozice <code>start</code>.


## Examples

### Example #1 
Najde dílčí řetězec z textu „Hello World“ začínající na indexu 6 po odsazení 5 znaků.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Najde dílčí řetězec z textu „Hello World“ začínající na indexu 6 do konce.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

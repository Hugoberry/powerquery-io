---
title: Text.Middle
---

# Text.Middle


Vrátí podřetězec do zadané délky.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Vrátí `count` znaků nebo do konce řetězce `text` od pozice `start`.


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


### Example #3
Najde dílčí řetězec z textu „Hello World“ začínající na indexu 0 po odsazení 2 znaků.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction

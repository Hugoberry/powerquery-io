---
title: Text.Middle
---

# Text.Middle


Belirli bir uzunluğun alt dizesini döndürür.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

`count` karakter döndürür veya `start` uzaklığında `text` bitişine kadar döndürür.


## Examples

### Example #1
5 karakter içeren 6 dizininden başlayarak "Merhaba Dünya" metninden alt dizeyi bulur.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
6 dizininden başlayarak bitişe kadar "Merhaba Dünya" metninden alt dizeyi bulur.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
"Merhaba Dünya" metninden 0 dizininden başlayan ve 2 karakteri kapsayan alt dizeyi bulun.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction

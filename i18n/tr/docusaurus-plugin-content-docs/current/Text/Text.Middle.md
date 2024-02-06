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

<code>count</code> karakter döndürür veya <code>start</code> uzaklığında <code>text</code> bitişine kadar döndürür.


## Examples

### Example #1 
5 karakter içeren 6 dizininden başlayarak &#34;Merhaba Dünya&#34; metninden alt dizeyi bulur.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
6 dizininden başlayarak bitişe kadar &#34;Merhaba Dünya&#34; metninden alt dizeyi bulur.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

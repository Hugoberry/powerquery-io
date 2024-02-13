---
title: Text.Range
---

# Text.Range


Zwraca podciąg znaleziony przy przesunięciu.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Zwraca podciąg z tekstu <code>text</code> znaleziony przy przesunięciu <code>offset</code>.    Możesz dołączyć opcjonalny parametr <code>count</code>, aby określić liczbę zwracanych znaków. Zgłasza błąd w przypadku zbyt małej liczby znaków.


## Examples

### Example #1 
Zwraca podciąg z tekstu „Hello World”, zaczynając od indeksu 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Znajdź podciąg z tekstu „Hello World Hello”, zaczynający się od indeksu 6 i zawierający 5 znaków.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

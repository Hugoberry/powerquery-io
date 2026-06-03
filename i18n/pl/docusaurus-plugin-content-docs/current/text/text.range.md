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

Zwraca podciąg z tekstu `text` znaleziony przy przesunięciu `offset`. Możesz dołączyć opcjonalny parametr `count`, aby określić liczbę zwracanych znaków. Zgłasza błąd, jeśli znaków jest za mało.


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

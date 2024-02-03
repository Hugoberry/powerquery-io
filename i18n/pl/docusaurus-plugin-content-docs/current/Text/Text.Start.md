---
title: Text.Start
---

# Text.Start


## Description

Zwraca początek tekstu.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Zwraca <code>count</code> pierwszych znaków z wartości <code>text</code> jako wartość tekstową.


## Examples

### Example #1 
Pobierz 5 pierwszych znaków z tekstu „Hello, World”.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction

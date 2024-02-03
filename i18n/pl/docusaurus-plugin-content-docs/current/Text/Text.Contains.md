---
title: Text.Contains
---

# Text.Contains


## Description

Zwraca informację, czy tekst zawiera podciąg.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Wykrywa, czy <code>text</code> zawiera wartość <code>substring</code>. Zwraca wartość TRUE, jeśli znaleziono daną wartość. Ta funkcja nie obsługuje symboli wieloznacznych ani wyrażeń regularnych.      <br />      <br />      Za pomocą opcjonalnego argumentu <code>comparer</code> można określić porównania bez uwzględniania wielkości liter, uwarunkowań kulturowych i ustawień regionalnych.      Następujące wbudowane funkcje porównujące są dostępne w języku formuły:      <ul>        <li><code>Comparer.Ordinal</code>: służy do dokładnego porównywania porządkowego uwzględniający wielkość liter</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: służy do dokładnego porównywania porządkowego nie uwzględniającego wielkości liter</li>        <li> <code>Comparer.FromCulture</code>: służy do porównywania porządkowego uwzględniającego uwarunkowania kulturowe</li>      </ul>


## Examples

### Example #1 
Sprawdź, czy tekst „Hello World” zawiera tekst „Hello”.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdź, czy tekst „Hello World” zawiera tekst „hello”.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Sprawdź, czy tekst „Hello world” zawiera ciąg „hello”, używając funkcji porównującej bez uwzględniania wielkości liter.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership

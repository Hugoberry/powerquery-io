---
title: Text.StartsWith
---

# Text.StartsWith


Wskazuje, czy tekst rozpoczyna się od określonej wartości.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Zwraca wartość true, jeśli wartość tekstowa `text` rozpoczyna się od wartości tekstowej `substring`.

-   `text`: wartość typu `text`, która jest szukana.
-   `substring`: wartość `text`, która jest ciągiem pomocniczym szukanym w wartości `text`.
-   `comparer`: *(opcjonalnie)* Funkcja porównująca `Comparer` służąca do kontrolowania porównania. Na przykład `Comparer.OrdinalIgnoreCase` może służyć do wyszukiwania bez uwzględniania wielkości liter.

`comparer` to `Comparer`, który służy do kontrolowania porównania. Funkcje porównujące mogą służyć do zapewniania porównania bez uwzględniania wielkości liter lub kultury i ustawień regionalnych.

Następujące wbudowane funkcje porównujące są dostępne w języku formuł:

-   `Comparer.Ordinal`: służy do wykonywania dokładnego porównania liczb porządkowych.
-   `Comparer.OrdinalIgnoreCase`: służy do wykonywania dokładnego porównania liczb porządkowych bez uwzględniania wielkości liter.
-   `Comparer.FromCulture`: służy do wykonywania porównania z uwzględnieniem czynników kulturowych.


## Examples

### Example #1
Sprawdź, czy tekst „Hello, World” rozpoczyna się od tekstu „hello”.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Sprawdź, czy tekst „Hello, World” rozpoczyna się od tekstu „Hello”.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Sprawdź, czy tekst „Hello, World” rozpoczyna się od tekstu „hello”.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership

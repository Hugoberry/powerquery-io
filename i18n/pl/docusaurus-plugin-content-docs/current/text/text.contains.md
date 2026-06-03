---
title: Text.Contains
---

# Text.Contains


Zwraca informację, czy tekst zawiera podciąg.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Wykrywa, czy `text` zawiera wartość `substring`. Zwraca wartość true, jeśli wartość zostanie znaleziona. Ta funkcja nie obsługuje symboli wieloznacznych ani wyrażeń regularnych.  
  
Opcjonalny argument `comparer` może służyć do określania porównań bez uwzględniania wielkości liter lub ustawień kulturowych i regionalnych. Następujące wbudowane funkcje porównujące są dostępne w języku formuł:

-   `Comparer.Ordinal`: służy do wykonywania porównań porządkowych z uwzględnieniem wielkości liter
-   `Comparer.OrdinalIgnoreCase`: służy do wykonywania porównań porządkowych bez uwzględniania wielkości liter
-   `Comparer.FromCulture`: służy do wykonywania porównań ustawień kulturowych

Jeśli pierwszy argument ma wartość null, ta funkcja zwraca wartość null.  
  
Wszystkie znaki są traktowane dosłownie. Na przykład „DR”, „ DR”, „DR ” i „ DR ” nie są traktowane jako równe sobie.


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


### Example #4
Znajdź wiersze w tabeli, które zawierają ciąg „A-” lub „7” w kodzie konta.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership

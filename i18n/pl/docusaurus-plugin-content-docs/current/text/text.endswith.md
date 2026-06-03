---
title: Text.EndsWith
---

# Text.EndsWith


Wskazuje, czy tekst kończy się określoną wartością.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Wskazuje, czy dany tekst, `text`, kończy się określoną wartością, `substring`. We wskazaniu jest uwzględniana wielkość liter.

`comparer` to `Comparer` funkcja porównująca używana do sterowania porównywaniem. Funkcje porównujące mogą być używane do przeprowadzania porównania nie wymagającego rozróżniania wielkości liter, uwzględniającego uwarunkowania kulturowe lub lokalne.

W języku formuły są dostępne następujące wbudowane funkcje porównujące:

-   `Comparer.Ordinal`: służy do wykonywania dokładnego porównania porządkowego
-   `Comparer.OrdinalIgnoreCase`: służy do wykonywania dokładnego porównania bez uwzględniania wielkości liter
-   `Comparer.FromCulture`: służy do porównywania uwzględniającego uwarunkowania kulturowe


## Examples

### Example #1
Sprawdź, czy tekst „Hello, World” kończy się wyrazem „world”.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Sprawdź, czy tekst „Hello, World” kończy się wyrazem „World”.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership

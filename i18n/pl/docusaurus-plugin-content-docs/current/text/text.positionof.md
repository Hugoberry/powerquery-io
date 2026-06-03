---
title: Text.PositionOf
---

# Text.PositionOf


Zwraca pierwszą pozycję wartości lub -1, jeśli wartość nie zostanie znaleziona.


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Zwraca pozycję określonego wystąpienia wartości tekstowej `substring` znalezionej w `text`. Za pomocą opcjonalnego parametru `occurrence` można określić, które położenie wystąpienia ma być zwracane (domyślnie jest to pierwsze wystąpienie). Zwraca wartość -1 jeśli wartość `substring` nie została znaleziona.

`comparer` to `Comparer` funkcja porównująca używana do sterowania porównywaniem. Funkcje porównujące mogą być używane do przeprowadzania porównania nie wymagającego rozróżniania wielkości liter, uwzględniającego uwarunkowania kulturowe lub lokalne.

W języku formuły są dostępne następujące wbudowane funkcje porównujące:

-   `Comparer.Ordinal`: służy do wykonywania dokładnego porównania porządkowego
-   `Comparer.OrdinalIgnoreCase`: służy do wykonywania dokładnego porównania bez uwzględniania wielkości liter
-   `Comparer.FromCulture`: służy do porównywania uwzględniającego uwarunkowania kulturowe


## Examples

### Example #1
Pobierz pozycję pierwszego wystąpienia wyrazu „World” w tekście „Hello, World! Hello, World!”.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Pobierz położenie ostatniego wystąpienia wyrazu „World” w tekście „Hello, World! Hello, World!”.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership

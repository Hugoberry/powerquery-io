---
title: Text.PositionOf
---

# Text.PositionOf


## Description

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


## Details

Zwraca pozycję określonego wystąpienia wartości tekstowej <code>substring</code> znalezionej w <code>text</code>.    Za pomocą opcjonalnego parametru <code>occurrence</code> można określić, które położenie wystąpienia ma być zwracane (domyślnie jest to pierwsze wystąpienie).    Zwraca wartość -1 jeśli wartość <code>substring</code> nie została znaleziona.      <div>        <code>comparer</code> to <code>Comparer</code> funkcja porównująca używana do sterowania porównywaniem. Funkcje porównujące mogą być używane do przeprowadzania porównania nie wymagającego rozróżniania wielkości liter, uwzględniającego uwarunkowania kulturowe lub lokalne.      </div>      <div>        W języku formuły są dostępne następujące wbudowane funkcje porównujące:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: służy do wykonywania dokładnego porównania porządkowego</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: służy do wykonywania dokładnego porównania bez uwzględniania wielkości liter</li>        <li> <code>Comparer.FromCulture</code>: służy do porównywania uwzględniającego uwarunkowania kulturowe</li>      </ul>


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

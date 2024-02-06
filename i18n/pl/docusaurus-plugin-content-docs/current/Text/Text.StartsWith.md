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

Zwraca wartość TRUE, jeśli wartość tekstowa <code>text</code> rozpoczyna się od wartości tekstowej <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> Wartość typu <code>text</code>, która jest szukana</li>        <li><code>substring</code>: <i></i> Wartość <code>text</code>, która jest podciągiem szukanym w wartości <code>substring</code></li>        <li><code>comparer</code>: <i>[Opcjonalnie]</i> Funkcja porównująca <code>Comparer</code> służaca do sterowania porównywaniem. Na przykład, za pomocą funkcji <code>Comparer.OrdinalIgnoreCase</code> można wykonywać operacje porównywania bez rozrózniania wielkości liter</li>      </ul>      <div>        <code>comparer</code>to  <code>Comparer</code> funkcja porównująca używana do sterowania porównywaniem. Funkcje porównujące mogą być używane do przeprowadzania porównania nie wymagającego rozróżniania wielkości liter, uwzględniającego uwarunkowania kulturowe lub lokalne.      </div>      <div>        W języku formuły są dostępne następujące wbudowane funkcje porównujące:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: służy do wykonywania dokładnego porównania porządkowego</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: służy do wykonywania dokładnego porównania bez uwzględniania wielkości liter</li>        <li> <code>Comparer.FromCulture</code>: służy do porównywania uwzględniającego uwarunkowania kulturowe</li>      </ul>


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




## Category
Text.Membership

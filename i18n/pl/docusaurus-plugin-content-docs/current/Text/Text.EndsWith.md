---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Wskazuje, czy tekst kończy się określoną wartością.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Wskazuje, czy dany tekst, <code>text</code>, kończy się określoną wartością, <code>substring</code>. We wskazaniu jest uwzględniana wielkość liter.<div>        <code>comparer</code> to <code>Comparer</code> funkcja porównująca używana do sterowania porównywaniem. Funkcje porównujące mogą być używane do przeprowadzania porównania nie wymagającego rozróżniania wielkości liter, uwzględniającego uwarunkowania kulturowe lub lokalne.</div><div>W języku formuły są dostępne następujące wbudowane funkcje porównujące:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: służy do wykonywania dokładnego porównania porządkowego</li>        <li><code> Comparer.OrdinalIgnoreCase</code>: służy do wykonywania dokładnego porównania bez uwzględniania wielkości liter</li>        <li>  <code>Comparer.FromCulture</code>: służy do porównywania uwzględniającego uwarunkowania kulturowe</li>      </ul>


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

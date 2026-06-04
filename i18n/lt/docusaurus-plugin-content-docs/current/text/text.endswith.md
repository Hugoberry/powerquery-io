---
title: Text.EndsWith
---

# Text.EndsWith


Nurodoma, ar tekstas baigiasi nurodyta reikšme.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Nurodoma, ar nurodytas tekstas `text` baigiasi nurodyta reikšme `substring`. Didžiosios ir mažosios raidės skiriamos.

`comparer` yra `lyginimo funkcija`, naudojama palyginimui kontroliuoti. Naudojant lyginimo funkcijas galima pateikti palyginimus, kuriuose neatsižvelgiama į didžiųjų ir mažųjų raidžių skyrimą arba atsižvelgiama į kultūrą ir lokalę.

Formulių kalboje galima naudoti toliau nurodytas įtaisytąsias lyginimo funkcijas:

-   `Comparer.Ordinal`: naudojama siekiant atlikti tikslų eiliškumo palyginimą
-   `Comparer.OrdinalIgnoreCase`: naudojama siekiant atlikti tikslų eiliškumo palyginimą neatsižvelgiant į didžiųjų ir mažųjų raidžių skyrimą
-   `Comparer.FromCulture`: naudojama siekiant atlikti palyginimą atsižvelgiant į kultūrą


## Examples

### Example #1
Patikrinkite, ar „Hello, World“ baigiasi tekstu „world“.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Patikrinkite, ar „Hello, World“ baigiasi tekstu „World“.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership

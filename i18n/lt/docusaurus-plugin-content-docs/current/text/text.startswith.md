---
title: Text.StartsWith
---

# Text.StartsWith


Nurodoma, ar tekstas prasideda nurodyta reikšme.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Jei teksto reikšmė `text` prasideda tekstine reikšme `substring`.

-   `text`: ieškotina `text` reikšmė.
-   `substring`: `text` reikšmė, kuri yra dalinė eilutės dalis, kurios reikia ieškoti `text`.
-   `comparer`: *(pasirinktinai)* palyginimui valdyti naudojamas `Comparer`. Pavyzdžiui, `Comparer.OrdinalIgnoreCase` gali būti naudojama atliekant iešką, kai neskiriamos didžiosios ir mažosios raidės.

`comparer` yra `Comparer`, naudojama palyginimui valdyti. Lyginamoji priemonė gali būti naudojama norint pateikti palyginimus, kuriuose neskiriamos didžiosios ir mažosios raidės, arba atsižvelgiama į kultūrą ir lokalę.

Formulių kalba pateiktos toliau nurodytos įtaisytosios lyginimo funkcijos:

-   `Comparer.Ordinal`: naudojama siekiant atlikti tikslų eiliškumo palyginimą.
-   `Comparer.OrdinalIgnoreCase`: naudojama siekiant atlikti eiliškumo palyginimą, kai neskiriamos didžiosios ir mažosios raidės.
-   `Comparer.FromCulture`: naudojama palyginimui atsižvelgiant į kultūrą atlikti.


## Examples

### Example #1
Patikrinkite, ar tekstas „Hello, World“ prasideda tekstu „hello“.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Patikrinkite, ar tekstas „Hello, World“ prasideda tekstu „Hello“.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Nepaisydami didžiųjų ir mažųjų raidžių patikrinkite, ar tekstas „Hello, World“ prasideda tekstu „hello“.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership

---
title: Text.PositionOf
---

# Text.PositionOf


Pateikiama pirmoji reikšmės padėtis (jei nerasta, pateikiama -1).


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

Pateikiama nurodyto tekstinės reikšmės `substring` atvejo vieta, rasta `text`. Galima naudoti pasirenkamą parametrą `occurrence` siekiant nurodyti, kurią atvejo vietą pateikti (pagal numatytuosius parametrus pateikiamas pirmas atvejis). Jei `substring` nebuvo rasta, pateikiama -1.

`comparer` yra `lyginimo funkcija`, naudojama palyginimui kontroliuoti. Naudojant lyginimo funkcijas galima pateikti palyginimus, kuriuose neatsižvelgiama į didžiųjų ir mažųjų raidžių skyrimą arba atsižvelgiama į kultūrą ir lokalę.

Formulių kalboje galima naudoti toliau nurodytas įtaisytąsias lyginimo funkcijas:

-   `Comparer.Ordinal`: naudojama siekiant atlikti tikslų eiliškumo palyginimą
-   `Comparer.OrdinalIgnoreCase`: naudojama siekiant atlikti tikslų eiliškumo palyginimą neatsižvelgiant į didžiųjų ir mažųjų raidžių skyrimą
-   `Comparer.FromCulture`: naudojama siekiant atlikti palyginimą atsižvelgiant į kultūrą


## Examples

### Example #1
Gaukite pirmojo „World“ atvejo tekste „Hello, World! Hello, World!“ padėtį.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Gaukite paskutinio žodžio „World“ atvejo tekste „Hello, World! Hello, World!“ vietą.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership

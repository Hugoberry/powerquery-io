---
title: Text.PositionOf
---

# Text.PositionOf


## Description

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


## Details

Pateikiama nurodyto tekstinės reikšmės <code>substring</code> atvejo vieta, rasta <code>text</code>.    Galima naudoti pasirenkamą parametrą <code>occurrence</code> siekiant nurodyti, kurią atvejo vietą pateikti (pagal numatytuosius parametrus pateikiamas pirmas atvejis).    Jei <code>substring</code> nebuvo rasta, pateikiama -1.      <div>        <code>comparer</code> yra <code>lyginimo funkcija</code>, naudojama palyginimui kontroliuoti. Naudojant lyginimo funkcijas galima pateikti palyginimus, kuriuose neatsižvelgiama į didžiųjų ir mažųjų raidžių skyrimą arba atsižvelgiama į kultūrą ir lokalę.      </div>      <div>        Formulių kalboje galima naudoti toliau nurodytas įtaisytąsias lyginimo funkcijas:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: naudojama siekiant atlikti tikslų eiliškumo palyginimą</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: naudojama siekiant atlikti tikslų eiliškumo palyginimą neatsižvelgiant į didžiųjų ir mažųjų raidžių skyrimą</li>        <li> <code>Comparer.FromCulture</code>: naudojama siekiant atlikti palyginimą atsižvelgiant į kultūrą</li>      </ul>


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

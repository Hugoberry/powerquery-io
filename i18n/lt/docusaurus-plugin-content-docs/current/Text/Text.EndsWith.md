---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Nurodoma, ar tekstas baigiasi nurodyta reikšme.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Nurodoma, ar nurodytas tekstas <code>text</code> baigiasi nurodyta reikšme <code>substring</code>. Didžiosios ir mažosios raidės skiriamos.      <div>        <code>comparer</code> yra <code>lyginimo funkcija</code>, naudojama palyginimui kontroliuoti. Naudojant lyginimo funkcijas galima pateikti palyginimus, kuriuose neatsižvelgiama į didžiųjų ir mažųjų raidžių skyrimą arba atsižvelgiama į kultūrą ir lokalę.      </div>      <div>        Formulių kalboje galima naudoti toliau nurodytas įtaisytąsias lyginimo funkcijas:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: naudojama siekiant atlikti tikslų eiliškumo palyginimą</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: naudojama siekiant atlikti tikslų eiliškumo palyginimą neatsižvelgiant į didžiųjų ir mažųjų raidžių skyrimą</li>        <li> <code>Comparer.FromCulture</code>: naudojama siekiant atlikti palyginimą atsižvelgiant į kultūrą</li>      </ul>


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

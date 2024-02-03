---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Nurodoma, ar tekstas prasideda nurodyta reikšme.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Jei teksto reikšmė <code>text</code> pradedama teksto reikšme <code>substring</code>, pateikiama reikšmė True.      <ul>       <li><code>text</code>: <i></i><code>tekso</code> reikšmė, kurios reikia ieškoti</li>        <li><code>substring</code>: <i></i><code>teksto</code> reikšmė, kuri yra dalinė eilutė, kurios reikia ieškoti <code>substring</code></li>        <li><code>comparer</code>: <i>[pasirenkama]</i> <code>lyginimo funkcijos</code> reikšmė, naudojama valdant palyginimą. Pvz., <code>Comparer.OrdinalIgnoreCase</code> galima naudoti atliekant ieškas, kai neskiriamos didžiosios ir mažosios raidės</li>      </ul>      <div>        <code>comparer</code> yra <code>lyginimo funkcijos</code> reikšmė, naudojama valdant palyginimą. Lyginimo funkcijas galima naudoti norint pateikti palyginimus, kuriuose neskiriamos didžiosios ir mažosios raidės arba atsižvelgiama į kultūrą ir lokalę.      </div>      <div>        Formulių kalboje pateiktos toliau nurodytos įtaisytosios lyginimo funkcijos:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: naudojama atliekant tikslų palyginimą eilės tvarka</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: naudojama atliekant tikslų palyginimą eilės tvarka, kai neskiriamos didžiosios ir mažosios raidės</li>        <li> <code>Comparer.FromCulture</code>: naudojama atliekant palyginimą, kai atsižvelgiama į kultūrą</li>      </ul>


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




## Category
Text.Membership

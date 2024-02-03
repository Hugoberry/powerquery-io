---
title: Text.Contains
---

# Text.Contains


## Description

Nurodoma, ar tekste yra dalinė eilutė.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Aptinka, ar <code>text</code> yra reikšmė <code>substring</code>. Jei reikšmė randama, pateikiama reikšmė True. Ši funkcija nepalaiko pakaitos simbolių arba paprastųjų išraiškų.      <br />      <br />      Pasirenkamas argumentas <code>comparer</code> gali būti naudojamas norint pateikti palyginimus, kuriuose neskiriamos didžiosios ir mažosios raidės, arba atsižvelgiama į kultūrą ir lokalę.      Formulių kalba pateiktos toliau nurodytos įtaisytosios lyginimo funkcijos:      <ul>        <li><code>Comparer.Ordinal</code>: : naudojama atliekant palyginimą eilės tvarka, kai skiriamos didžiosios ir mažosios raidės</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: naudojama atliekant palyginimą eilės tvarka, neskiriant didžiųjų ir mažųjų raidžių</li>        <li> <code>Comparer.FromCulture</code>: naudojama atliekantį kultūrą reaguojantį palyginimą</li>      </ul>


## Examples

### Example #1 
Sužinokite, ar tekste „Hello World“ yra tekstas „Hello“.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Sužinokite, ar tekste „Hello World“ yra tekstas „hello“.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Naudodami lyginimo priemonę, neskiriančią didžiųjų ir mažųjų raidžių, sužinokite, ar tekste „Hello World“ yra žodis „hello“.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership

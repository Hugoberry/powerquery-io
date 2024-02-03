---
title: Text.Contains
---

# Text.Contains


## Description

Tiek atgriezts, vai tekstā ir ietverta apakšvirkne.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Nosaka, vai <code>text</code> ir vērtība <code>substring</code>. Ja vērtība tiek atrasta, tiek atgriezta vērtība True. Šī funkcija neatbalsta aizstājējzīmes vai regulāras izteiksmes.      <br />      <br />      Neobligāto argumentu <code>comparer</code> var izmantot, lai norādītu reģistrnejutīgus vai kultūrai un lokalizācijai atbilstošus salīdzinājumus.      Formulas valodā ir pieejami turpmāki iebūvētie salīdzinātāji:      <ul>        <li><code>Comparer.Ordinal</code>: izmanto, lai veiktu reģistrjutīgu kārtas salīdzinājumu.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: izmanto, lai veiktu reģistrnejutīgu kārtas salīdzinājumu.</li>        <li> <code>Comparer.FromCulture</code>: izmanto, lai veiktu kultūrai atbilstoši salīdzinājumu.</li>      </ul>


## Examples

### Example #1 
Uzziniet, vai tekstā Hello World ir ietverts Hello.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Uzziniet, vai tekstā Hello World ir ietverts hello.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Uzziniet, vai tekstā “Sveika, pasaule” ir ietverts vārds “sveiki”, izmantojot salīdzināšanas līdzekli, kas nav reģistrjutīgs.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership

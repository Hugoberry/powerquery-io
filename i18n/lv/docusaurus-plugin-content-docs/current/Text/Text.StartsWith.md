---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Tiek norādīts, vai teksts sākas ar norādīto vērtību.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Atgriež vērtību True, ja teksta vērtība <code>text</code> sākas ar teksta vērtību <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> <code>text</code> vērtība, ko paredzēts meklēt</li>        <li><code>substring</code>: <i></i><code>text</code> vērtība, kas ir apakšvirkne, kuru paredzēts meklēt <code>substring</code></li>        <li><code>comparer</code>: <i>[Neobligāti]</i> <code>Comparer</code> vērtība, ko izmanto, lai kontrolētu salīdzināšanu. Piemēram, <code>Comparer.OrdinalIgnoreCase</code> var izmantot, lai veiktu meklēšanu, kas nav reģistrjutīga</li>      </ul>      <div>        <code>comparer</code> ir <code>Comparer</code>, ko izmanto, lai kontrolētu salīdzināšanu. Salīdzinātājus var izmantot, lai nodrošinātu reģistrnejutīgu vai kultūrai un lokalizācijai atbilstošu salīdzināšanu.      </div>      <div>        Formulu valodā ir pieejami tālāk norādītie iebūvētie salīdzinātāji:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: izmanto, lai veiktu precīzu kārtas salīdzināšanu</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: izmanto, lai veiktu precīzu kārtas salīdzināšanu, kas nav reģistrjutīga</li>        <li> <code>Comparer.FromCulture</code>: izmanto, lai veiktu kultūrai atbilstošu salīdzināšanu</li>      </ul>


## Examples

### Example #1 
Pārbaudiet, vai teksts Hello, World sākas ar tekstu hello.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Pārbaudiet, vai teksts Hello, World sākas ar tekstu Hello.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership

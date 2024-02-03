---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Tiek norādīts, vai teksts beidzas ar norādīto vērtību.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Norāda, vai norādītais teksts <code>text</code> beidzas ar norādīto vērtību <code>substring</code>. Norādīšana ir reģistrjutīga.      <div>        <code>comparer</code> ir <code>Comparer</code>, ko izmanto, lai kontrolētu salīdzināšanu. Salīdzinātājus var izmantot, lai nodrošinātu reģistrnejutīgu vai kultūrai un lokalizācijai atbilstošu salīdzināšanu.      </div>      <div>        Formulu valodā ir pieejami tālāk norādītie iebūvētie salīdzinātāji:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: izmanto precīzai kārtas salīdzināšanai</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: izmanto precīzai kārtas salīdzināšanai, kas nav reģistrjutīga.</li>        <li> <code>Comparer.FromCulture</code>: izmanto, lai veiktu kultūrai atbilstošu salīdzināšanu.</li>      </ul>


## Examples

### Example #1 
Pārbaudiet, vai Hello, World beidzas ar world.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Pārbaudiet, vai Hello, World beidzas ar World.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership

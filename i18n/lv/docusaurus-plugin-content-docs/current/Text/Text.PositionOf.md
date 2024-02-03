---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Tiek atgriezta vērtības pirmā pozīcija (-1, ja netiek atrasta).


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

Atgriež norādītā teksta vērtības <code>substring</code> gadījuma pozīciju tekstā <code>text</code>.    Var izmantot neobligātu parametru <code>occurrence</code>, lai norādītu, kura gadījuma pozīcija jāatgriež (pēc noklusējuma tiek atgriezts pirmais gadījums).    Ja vērtība <code>substring</code> netiek atrasta, tiek atgriezta pozīcija -1.      <div>        <code>comparer</code> ir <code>Comparer</code>, ko izmanto, lai kontrolētu salīdzināšanu. Salīdzinātājus var izmantot, lai nodrošinātu reģistrnejutīgu vai kultūrai un lokalizācijai atbilstošu salīdzināšanu.      </div>      <div>        Formulu valodā ir pieejami tālāk norādītie iebūvētie salīdzinātāji:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: izmanto precīzai kārtas salīdzināšanai</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: izmanto precīzai kārtas salīdzināšanai, kas nav reģistrjutīga</li>        <li> <code>Comparer.FromCulture</code>: izmanto, lai veiktu kultūrai atbilstošu salīdzināšanu</li>      </ul>


## Examples

### Example #1 
Iegūstiet World pirmā gadījuma pozīciju tekstā Hello, World! Hello, World!.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Iegūstiet vārda World pēdējā lietojuma pozīciju tekstā Hello, World! Hello, World!.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership

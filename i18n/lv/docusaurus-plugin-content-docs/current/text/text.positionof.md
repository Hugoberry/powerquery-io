---
title: Text.PositionOf
---

# Text.PositionOf


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


## Remarks

Atgriež norādītā teksta vērtības `substring` gadījuma pozīciju tekstā `text`. Var izmantot neobligātu parametru `occurrence`, lai norādītu, kura gadījuma pozīcija jāatgriež (pēc noklusējuma tiek atgriezts pirmais gadījums). Ja vērtība `substring` netiek atrasta, tiek atgriezta pozīcija -1.

`comparer` ir `Comparer`, ko izmanto, lai kontrolētu salīdzināšanu. Salīdzinātājus var izmantot, lai nodrošinātu reģistrnejutīgu vai kultūrai un lokalizācijai atbilstošu salīdzināšanu.

Formulu valodā ir pieejami tālāk norādītie iebūvētie salīdzinātāji:

-   `Comparer.Ordinal`: izmanto precīzai kārtas salīdzināšanai
-   `Comparer.OrdinalIgnoreCase`: izmanto precīzai kārtas salīdzināšanai, kas nav reģistrjutīga
-   `Comparer.FromCulture`: izmanto, lai veiktu kultūrai atbilstošu salīdzināšanu


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

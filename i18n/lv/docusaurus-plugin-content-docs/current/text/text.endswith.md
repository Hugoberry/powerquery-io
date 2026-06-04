---
title: Text.EndsWith
---

# Text.EndsWith


Tiek norādīts, vai teksts beidzas ar norādīto vērtību.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Norāda, vai norādītais teksts `text` beidzas ar norādīto vērtību `substring`. Norādīšana ir reģistrjutīga.

`comparer` ir `Comparer`, ko izmanto, lai kontrolētu salīdzināšanu. Salīdzinātājus var izmantot, lai nodrošinātu reģistrnejutīgu vai kultūrai un lokalizācijai atbilstošu salīdzināšanu.

Formulu valodā ir pieejami tālāk norādītie iebūvētie salīdzinātāji:

-   `Comparer.Ordinal`: izmanto precīzai kārtas salīdzināšanai
-   `Comparer.OrdinalIgnoreCase`: izmanto precīzai kārtas salīdzināšanai, kas nav reģistrjutīga.
-   `Comparer.FromCulture`: izmanto, lai veiktu kultūrai atbilstošu salīdzināšanu.


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

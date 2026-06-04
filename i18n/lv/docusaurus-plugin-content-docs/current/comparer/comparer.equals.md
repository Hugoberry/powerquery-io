---
title: Comparer.Equals
---

# Comparer.Equals


Atgriež loģisku vērtību, pamatojoties uz divu norādīto vērtību vienādības pārbaudi.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Atgriež `logical` vērtību, pamatojoties uz vienādības pārbaudi divām norādītajām vērtībām, `x` un `y`, izmantojot norādīto vērtību `x` `comparer`.

`comparer` ir `Salīdzinātājs`, kuru izmanto, lai kontrolētu salīdzināšanu. Salīdzināšanas funkcija pieņem divus argumentus un atgriež -1, 0 vai 1, balstoties uz to, vai pirmā vērtība ir mazāka, vienāda vai lielāka par otro vērtību. Salīdzinātājus var izmantot, lai nodrošinātu reģistrnejutīgu vai kultūrai un lokalizācijai atbilstošu salīdzināšanu.

Formulu valodā ir pieejami tālāk norādītie iebūvētie salīdzinātāji:

-   `Comparer.Ordinal`: izmanto precīzai kārtas skaitļu salīdzināšanai
-   `Comparer.OrdinalIgnoreCase`: izmanto precīzai kārtas skaitļu salīdzināšanai, kas nav reģistrjutīga
-   `Comparer.FromCulture`: izmanto, lai veiktu kultūrai atbilstošu salīdzināšanu


## Examples

### Example #1
Lai noteiktu, vai vērtības ir vienlīdzīgas, salīdziniet "1" un "A", izmantojot lokalizāciju "en-US".
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer

---
title: Text.StartsWith
---

# Text.StartsWith


Tiek norādīts, vai teksts sākas ar norādīto vērtību.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Atgriež vērtību Patiess, ja teksta vērtība `text` sākas ar teksta vērtību `substring`.

-   `text`: Meklējamā `text` vērtība.
-   `substring`: `text` vērtība, kas ir apakšvirkne, kas jāmeklē `text`.
-   `comparer`: *(Optional)*`Comparer` vērtība, ko izmanto, lai kontrolētu salīdzināšanu. Piemēram, salīdzinātāju `Comparer.OrdinalIgnoreCase` var izmantot, lai veiktu reģistrnejutīgu meklēšanu.

`comparer` ir `salīdzinātājs`, kas tiek izmantots salīdzinājuma kontrolēšanai. Salīdzinātājus var izmantot, lai nodrošinātu reģistrnejutīgus vai kultūrai un lokalizācijai atbilstošus salīdzinājumus.

Formulu valodā ir pieejami šādi iebūvētie salīdzinātāji:

-   `Comparer.Ordinal`: izmanto, lai veiktu precīzu kārtas numuru salīdzinājumu.
-   `Comparer.OrdinalIgnoreCase`: izmanto, lai veiktu precīzu kārtas numuru reģistrnejutīgu salīdzinājumu.
-   `Comparer.FromCulture`: izmanto, lai veiktu kultūrai atbilstošu salīdzinājumu


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


### Example #3
Ignorējot reģistru, pārbaudīt, vai teksts “Hello, World” sākas ar tekstu “hello”.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership

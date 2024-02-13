---
title: List.Skip
---

# List.Skip


Returnerer en liste, der springer det angivne antal elementer over i starten af listen.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returnerer en liste, der springer første element på listen <code>list</code> over. Hvis <code>list</code> er en tom liste, returneres der en tom liste.Denne funktion bruger en valgfri parameter, <code>countOrCondition</code>, for at understøtte overspringning af flere værdier som anført nedenfor. <ul> <li>Hvis der er angivet et tal, springes elementer op til det angivne antal over. </li> <li>Hvis der er angivet en betingelse, starter den returnerede liste med det første element i <code>list</code>, der opfylder kriterierne. Når et element ikke opfylder betingelsen, tages der ikke flere elementer med i betragtning. </li> <li>Hvis denne parameter er null, anvendes standardfunktionsmåden. </li> </ul>


## Examples

### Example #1 
Opret en liste ud fra \{1, 2, 3, 4, 5} uden de første 3 tal.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Opret en liste ud fra \{5, 4, 2, 6, 1}, der starter med et tal, der er mindre end 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection

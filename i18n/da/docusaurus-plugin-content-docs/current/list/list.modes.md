---
title: List.Modes
---

# List.Modes


Returnerer en liste over de hyppigste værdier på listen.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnerer de elementer, der hyppigst vises i `list`. Hvis listen er tom, opstår der en fejl. Hvis der vises flere elementer med den samme maksimale hyppighed, returneres de alle. Der kan angives en valgfri værdi for sammenligningskriterier, `equationCriteria`, for at styre lighedstest.


## Examples

### Example #1
Find de elementer, der vises mest hyppigt på listen, `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages

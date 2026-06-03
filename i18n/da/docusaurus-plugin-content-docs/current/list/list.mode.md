---
title: List.Mode
---

# List.Mode


Returnerer den hyppigste værdi på listen.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Returnerer det element, der oftest vises i `list`. Hvis listen er tom, opstår der en fejl. Hvis der vises flere elementer med den samme maksimale hyppighed, vælges den sidste. Der kan angives en valgfri værdi for sammenligningskriterier, `equationCriteria`, for at styre lighedstest.


## Examples

### Example #1
Find det element, der vises mest hyppigt på listen, `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Find det element, der vises mest hyppigt på listen, `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages

---
title: List.Modes
---

# List.Modes


Vráti zoznam najčastejšie sa vyskytujúcich hodnôt v zozname.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vráti položky, ktoré sa v `list` zobrazujú najčastejšie. Ak je zoznam prázdny, vyvolá sa chyba. Ak sa zobrazí viacero položiek s rovnakou maximálnou frekvenciou, vrátia sa všetky. Na kontrolu testovania rovnosti možno zadať voliteľnú hodnotu porovnávacích kritérií `equationCriteria`.


## Examples

### Example #1
Nájdite položky, ktoré sa najčastejšie vyskytujú v zozname `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages

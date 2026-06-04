---
title: List.Mode
---

# List.Mode


Vráti najčastejšie sa vyskytujúcu hodnotu v zozname.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Vráti položku, ktorá sa v `list` zobrazuje najčastejšie. Ak je zoznam prázdny, vyvolá sa chyba. Ak sa zobrazí viacero položiek s rovnakou maximálnou frekvenciou, vyberie sa posledná. Na kontrolu testovania rovnosti možno zadať voliteľnú hodnotu porovnávacích kritérií `equationCriteria`.


## Examples

### Example #1
Nájdite položku, ktorá sa najčastejšie vyskytuje v zozname `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Nájdite položku, ktorá sa najčastejšie vyskytuje v zozname `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages

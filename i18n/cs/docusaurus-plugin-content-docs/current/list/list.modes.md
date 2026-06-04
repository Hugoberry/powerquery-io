---
title: List.Modes
---

# List.Modes


Vrátí seznam nejčastěji se vyskytujících hodnot v seznamu.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vrátí položky, které se v seznamu `list` zobrazují nejčastěji. Pokud je seznam prázdný, vyvolá se chyba. Pokud se zobrazí více položek se stejnou maximální frekvencí, vrátí se všechny. Pro řízení testování rovnosti lze zadat volitelnou hodnotu kritérií porovnávání `equationCriteria`.


## Examples

### Example #1
Vyhledá nejčastěji se vyskytující položky v seznamu `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages

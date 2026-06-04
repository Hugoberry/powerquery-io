---
title: List.Mode
---

# List.Mode


Vrátí nejčastěji se vyskytující hodnotu v seznamu.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Vrátí položku, která se v seznamu `list` zobrazuje nejčastěji. Pokud je seznam prázdný, vyvolá se chyba. Pokud se zobrazí více položek se stejnou maximální frekvencí, zvolí se poslední. Pro řízení testování rovnosti lze zadat volitelnou hodnotu kritérií porovnávání `equationCriteria`.


## Examples

### Example #1
Vyhledá nejčastěji se vyskytující položku v seznamu `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Vyhledá nejčastěji se vyskytující položku v seznamu `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages

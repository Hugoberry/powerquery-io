---
title: List.Mode
---

# List.Mode


A lista leggyakoribb értéket adja vissza.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

A(z) `list` szolgáltatásban leggyakrabban megjelenő elemet adja vissza. Ha a lista üres, a rendszer hibát jelez. Ha több elem jelenik meg ugyanazzal a maximális gyakorisággal, a rendszer az utolsót választja. Megadható egy nem kötelező összehasonlító feltétel értéke (`equationCriteria`) az egyenlőségvizsgálat szabályozásához.


## Examples

### Example #1
Az `{"A", 1, 2, 3, 3, 4, 5}` listán leggyakrabban szereplő elem megkeresése
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Az `{"A", 1, 2, 3, 3, 4, 5, 5}` listán leggyakrabban szereplő elem megkeresése
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages

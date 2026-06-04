---
title: List.Modes
---

# List.Modes


A lista leggyakoribb értékeinek listáját adja vissza.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

A(z) `list` szolgáltatásban leggyakrabban megjelenő elemeket adja vissza. Ha a lista üres, a rendszer hibát jelez. Ha több elem jelenik meg ugyanazzal a maximális gyakorisággal, a rendszer az összes elemet visszaadja. Megadható egy nem kötelező összehasonlító feltétel értéke (`equationCriteria`) az egyenlőségvizsgálat szabályozásához.


## Examples

### Example #1
Az `{"A", 1, 2, 3, 3, 4, 5, 5}` listán leggyakrabban szereplő elemek megkeresése
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages

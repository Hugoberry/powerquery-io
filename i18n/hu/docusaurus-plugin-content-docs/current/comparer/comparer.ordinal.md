---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Az értékeket sorszámszabályokkal összevető összehasonlító függvény visszaadása.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Olyan összehasonlító függvényt ad vissza, amely sorszámszabályok használatával hasonlítja össze a megadott `x` és `y` értékeket.  
  
Az összehasonlító függvény két argumentumot fogad el, és -1, 0 vagy 1 értéket ad vissza attól függően, hogy az első érték a másodikhoz képest kisebb, egyenlő vagy nagyobb.


## Examples

### Example #1
Az „encyclopædia” és az „encyclopaedia” szó egyezőségének vizsgálata a karakterek sorszáma alapján. A művelet ekvivalens a `Comparer.FromCulture("en-US")` művelettel.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer

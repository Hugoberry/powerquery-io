---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Vrátí funkci porovnávače, která pro porovnání hodnot používá pravidla řadových číslovek.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Vrátí porovnávací funkci, která pomocí řadových pravidel porovnává zadané hodnoty `x` a `y`.  
  
Porovnávací funkce přijímá dva argumenty a vrací -1, 0 nebo 1 na základě toho, zda je první hodnota menší než, rovna nebo větší než druhá.


## Examples

### Example #1
Pomocí pravidel řadových číslovek porovná, jestli jsou zadání „encyclopædia“ a „encyclopaedia“ ekvivalentní. Poznámka: Zadání jsou vyhodnocena jako ekvivalentní při použití funkce `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer

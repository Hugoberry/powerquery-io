---
title: Comparer.Equals
---

# Comparer.Equals


Vrátí logickou hodnotu založenou na kontrole rovnosti dvou daných hodnot.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Vrátí `logickou` hodnotu založenou na kontrole rovnosti dvou zadaných hodnot `x` a `y`, using the provided `comparer`.

`comparer` je `Porovnávač`, který se používá k řízení porovnání. Porovnávač je funkce, která přijímá dva argumenty a vrací -1, 0 nebo 1 na základě toho, jestli je první hodnota menší než, rovna, nebo větší než druhá. Porovnávač lze použít k porovnání bez rozlišování malých a velkých písmen nebo jazykové verze a národního prostředí.

V jazyce vzorců jsou k dispozici následující integrované porovnávače:

-   `Comparer.Ordinal`: Používá se k přesnému porovnání pořadí
-   `Comparer.OrdinalIgnoreCase`: Používá se k porovnání bez rozlišování velkých a malých písmen s přesným pořadím
-   `Comparer.FromCulture`: Používá se k porovnání s jazykovou verzí


## Examples

### Example #1
Porovnáním hodnot „1“ a „A“ s použitím národního prostředí „en-us“ určí, jestli jsou hodnoty stejné.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer

---
title: Double.From
---

# Double.From


Vytvorí číslo s dvojitou presnosťou z danej hodnoty.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vráti hodnotu `number` s dvojitou presnosťou zo zadanej hodnoty `value`. Ak je zadaná hodnota `value` `null`, príkaz `Double.From` vráti hodnotu `null`. Ak je zadaná hodnota `value` typu `number` v rozsahu dvojitej presnosti, vráti sa `value`. V opačnom prípade sa vráti chyba. Ak je `value` akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu `number` pomocou príkazu `Number.FromText`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získajte hodnotu `number` s dvojitou presnosťou čísla `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting

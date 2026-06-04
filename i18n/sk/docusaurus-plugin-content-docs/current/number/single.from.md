---
title: Single.From
---

# Single.From


Vytvorí číslo s jednoduchou presnosťou z danej hodnoty.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vráti hodnotu `number` s jednoduchou presnosťou zo zadanej hodnoty `value`. Ak je zadaná hodnota `value` `null`, príkaz `Single.From` vráti hodnotu `null`. Ak je zadaná hodnota `value` typu `number` v rozsahu jednoduchej presnosti, vráti sa `value`. V opačnom prípade sa vráti chyba. Ak je `value` akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu `number` pomocou príkazu `Number.FromText`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získajte hodnotu `number` s jednoduchou presnosťou čísla `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting

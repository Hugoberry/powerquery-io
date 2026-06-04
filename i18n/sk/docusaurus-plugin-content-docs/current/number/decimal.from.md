---
title: Decimal.From
---

# Decimal.From


Vytvorí desatinné číslo z danej hodnoty.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vráti hodnotu `number` vo formáte desatinného čísla zo zadanej hodnoty `value`. Ak je zadaná hodnota `value` `null`, príkaz `Decimal.From` vráti hodnotu `null`. Ak je zadaná hodnota `value` typu `number` v rozsahu desatinného čísla, vráti sa `value`. V opačnom prípade sa vráti chyba. Ak je `value` akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu `number` pomocou príkazu `Number.FromText`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získajte desatinnú hodnotu `number` čísla `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting

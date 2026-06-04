---
title: Percentage.From
---

# Percentage.From


Vráti percentuálnu hodnotu z danej hodnoty.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vráti hodnotu `percentage` zo zadanej hodnoty `value`. Ak je zadaná hodnota `value` `null`, `Percentage.From` vráti hodnotu `null`. Ak je zadaná hodnota `value` `text` zakončená symbolom percenta, vráti sa konvertované desatinné číslo. V opačnom prípade sa hodnota konvertuje na hodnotu `number` pomocou príkazu `Number.From`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získajte hodnotu `percentage` z čísla `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting

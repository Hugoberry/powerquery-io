---
title: Int64.From
---

# Int64.From


Vytvorí 64-bitové celé číslo z danej hodnoty.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vráti hodnotu `number` vo formáte 64-bitového celého čísla zo zadanej hodnoty `value`. Ak je zadaná hodnota `value` `null`, príkaz `Int64.From` vráti hodnotu `null`. Ak je zadaná hodnota `value` typu `number` v rozsahu 64-bitového celého čísla bez zlomkovej časti, vráti sa `value`. Ak má zlomkovú časť, číslo sa zaokrúhli podľa zadaného spôsobu zaokrúhlenia. Predvolený spôsob zaokrúhlenia je `RoundingMode.ToEven`. Ak je `value` akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu `number` pomocou príkazu `Number.FromText`. Dostupné spôsoby zaokrúhlenia nájdete v časti `Number.Round`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získať hodnotu typu `number` 64-bitového celého čísla `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Získajte hodnotu `number` vo formáte 64-bitového celého čísla z čísla `"4.5"` na základe spôsobu `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

---
title: Int16.From
---

# Int16.From


Vytvorí 16-bitové celé číslo z danej hodnoty.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vráti hodnotu `number` vo formáte 16-bitového celého čísla zo zadanej hodnoty `value`. Ak je zadaná hodnota `value` `null`, príkaz `Int16.From` vráti hodnotu `null`. Ak je zadaná hodnota `value` typu `number` v rozsahu 16-bitového celého čísla bez zlomkovej časti, vráti sa `value`. Ak má zlomkovú časť, číslo sa zaokrúhli podľa zadaného spôsobu zaokrúhlenia. Predvolený spôsob zaokrúhlenia je `RoundingMode.ToEven`. Ak je `value` akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu `number` pomocou príkazu `Number.FromText`. Dostupné spôsoby zaokrúhlenia nájdete v časti `Number.Round`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získajte 16-bitovú celočíselnú hodnotu `number` čísla `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Získajte 16-bitovú celočíselnú hodnotu `number` čísla `"4.5"` pomocou spôsobu `RoundingMode.AwayFromZero`.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

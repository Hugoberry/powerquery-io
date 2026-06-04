---
title: Int8.From
---

# Int8.From


Vytvorí 8-bitové celé číslo so znamienkom z danej hodnoty.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vráti hodnotu `number` vo formáte 8-bitového celého čísla so znamienkom zo zadanej hodnoty `value`. Ak je zadaná hodnota `value` `null`, príkaz `Int8.From` vráti hodnotu `null`. Ak je zadaná hodnota `value` typu `number` v rozsahu 8-bitového celého čísla so znamienkom bez zlomkovej časti, vráti sa `value`. Ak má zlomkovú časť, číslo sa zaokrúhli podľa zadaného spôsobu zaokrúhlenia. Predvolený spôsob zaokrúhlenia je `RoundingMode.ToEven`. Ak je `value` akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu `number` pomocou príkazu `Number.FromText`. Dostupné spôsoby zaokrúhlenia nájdete v časti `Number.Round`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získajte 8-bitovú celočíselnú hodnotu `number` so znamienkom čísla `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Získajte 8-bitovú celočíselnú hodnotu `number` so znamienkom čísla `"4.5"` pomocou spôsobu `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

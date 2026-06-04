---
title: Currency.From
---

# Currency.From


Vráti zo zadanej hodnoty hodnotu meny.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vráti zo zadanej hodnoty `value` hodnotu `currency`. Ak je zadaná hodnota `value` `null`, príkaz `Currency.From` vráti hodnotu `null`. Ak je zadaná hodnota `value` `number` v rozsahu meny, zlomková časť hodnoty `value` sa zaokrúhli na 4 desatinné miesta a vráti sa. Ak je `value` akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu `number` pomocou príkazu `Number.FromText`. Platný rozsah meny je `-922,337,203,685,477.5808` až `922,337,203,685,477.5807`. Dostupné spôsoby zaokrúhlenia nájdete v časti `Number.Round`. Predvolený spôsob je `RoundingMode.ToEven`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Získanie hodnoty `currency` pre `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Získajte hodnotu `currency` pre `"1.23455"` na základe spôsobu `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting

---
title: Byte.From
---

# Byte.From


Vytvoří z dané hodnoty 8bitové celé číslo.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vrátí 8bitovou celočíselnou hodnotu `number` z dané hodnoty `value`. Pokud má daná hodnota `value` hodnotu `null`, příkaz `Byte.From` vrátí `null`. Pokud je daná hodnota `value` číslo `number` v rozsahu 8bitových celých čísel bez zlomkové části, vrátí se hodnota `value`. Pokud má zlomkovou část, číslo se zaokrouhlí podle zadaného režimu zaokrouhlování. Výchozí režim zaokrouhlování je `RoundingMode.ToEven`. Pokud má hodnota `value` jakýkoli jiný typ, bude nejprve pomocí `Number.FromText` převedena na typ `number`. Další režimy zaokrouhlování viz `Number.Round`. Volitelně je možné zadat i `culture` (např. „en-US“).


## Examples

### Example #1
Načte 8bitovou celočíselnou hodnotu `"4"` `number`.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Načte 8bitovou celočíselnou hodnotu `number` `"4,5"` s použitím `RoundingMode.AwayFromZero`.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

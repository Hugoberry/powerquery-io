---
title: Int64.From
---

# Int64.From


Vytvoří 64bitové celé číslo z dané hodnoty.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vrátí 64bitovou celočíselnou hodnotu `number` z dané hodnoty `value`. Pokud má daná hodnota `value` hodnotu `null`, příkaz `Int64.From` vrátí `null`. Pokud je daná hodnota `value` číslo `number` v rozsahu 64bitových celých čísel bez zlomkové části, vrátí se hodnota `value`. Pokud má zlomkovou část, číslo se zaokrouhlí podle zadaného režimu zaokrouhlování. Výchozí režim zaokrouhlování je `RoundingMode.ToEven`. Pokud má hodnota `value` jakýkoli jiný typ, bude nejprve pomocí `Number.FromText` převedena na typ `number`. Další režimy zaokrouhlování viz `Number.Round`. Volitelně je možné zadat i `culture` (např. „en-US“).


## Examples

### Example #1
Získá 64bitovou celočíselnou hodnotu `number` hodnoty `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Získá 64bitovou celočíselnou hodnotu `number` hodnoty `4,5` pomocí funkce `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

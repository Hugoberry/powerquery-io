---
title: Int8.From
---

# Int8.From


Vytvoří z dané hodnoty 8bitové celé číslo se znaménkem.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vrátí podepsanou 8bitovou celočíselnou hodnotu `number` z dané hodnoty `value`. Pokud má daná hodnota `value` hodnotu `null`, příkaz `Int8.From` vrátí `null`. Pokud je daná hodnota `value` číslo `number` v rozsahu podepsaných 8bitových celých čísel bez zlomkové části, vrátí se hodnota `value`. Pokud má zlomkovou část, číslo se zaokrouhlí podle zadaného režimu zaokrouhlování. Výchozí režim zaokrouhlování je `RoundingMode.ToEven`. Pokud má hodnota `value` jakýkoli jiný typ, bude nejprve pomocí `Number.FromText` převedena na typ `number`. Další režimy zaokrouhlování viz `Number.Round`. Volitelně je možné zadat i `culture` (např. „en-US“).


## Examples

### Example #1
Načte 8bitové celé číslo se znaménkem z hodnoty `number` `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Načte 8bitové celé číslo se znaménkem hodnoty `number` `"4,5"` s použitím `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

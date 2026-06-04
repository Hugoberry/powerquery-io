---
title: Decimal.From
---

# Decimal.From


Vytvoří z dané hodnoty hodnotu Decimal.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vrátí hodnotu Decimal `number` z dané hodnoty `value`. Pokud je daná hodnota `value` `null`, příkaz `Decimal.From` vrátí `null`. Pokud je daná hodnota `value` `number` v rozsahu Decimal, vrátí se `value`, jinak se vrátí chyba. Pokud má daná hodnota `value` jakýkoli jiný typ, bude nejprve pomocí `Number.FromText` převedena na typ `number`. Volitelně je možné zadat i `culture` (např. en-US).


## Examples

### Example #1
Načte hodnotu Decimal `number` `"4,5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting

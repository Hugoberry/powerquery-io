---
title: Double.From
---

# Double.From


Vytvoří z dané hodnoty hodnotu Double.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vrátí hodnotu Double `number` z dané hodnoty `value`. Pokud je daná hodnota `value` `null`, příkaz `Double.From` vrátí `null`. Pokud je daná hodnota `value` `number` v rozsahu Double, vrátí se `value`, jinak se vrátí chyba. Pokud má daná hodnota `value` jakýkoli jiný typ, bude nejprve pomocí `Number.FromText` převedena na typ `number`. Volitelně je možné zadat i `culture` (např. en-US).


## Examples

### Example #1
Načte hodnotu Double `number` `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting

---
title: Single.From
---

# Single.From


Vytvoří z dané hodnoty hodnotu Single.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vrátí hodnotu Single `number` z dané hodnoty `value`. Pokud je daná hodnota `value` `null`, příkaz `Single.From` vrátí `null`. Pokud je daná hodnota `value` `number` v rozsahu Single, vrátí se `value`, jinak se vrátí chyba. Pokud má daná hodnota `value` jakýkoli jiný typ, bude nejprve pomocí `Number.FromText` převedena na typ `number`. Volitelně je možné zadat i `culture` (např. en-US).


## Examples

### Example #1
Načte hodnotu Single hodnoty `number` `"1,5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting

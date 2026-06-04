---
title: Currency.From
---

# Currency.From


Z dané hodnoty vrátí hodnotu měny.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Z předané hodnoty `value` vrátí hodnotu `currency`. Pokud má předaná hodnota `value` hodnotu `null`, příkaz `Currency.From` vrátí `null`. Pokud je předaná hodnota `value` typu `number` v rozsahu měny, vrátí se hodnota `value` zaokrouhlená na čtyři desetinná místa. Pokud je předaná hodnota `value` jakéhokoli jiného typu, bude nejprve pomocí `Number.FromText` převedena na typ `number`. Platný rozsah měny je `-922,337,203,685,477.5808` až `922,337,203,685,477.5807`. Informace o dostupných režimech zaokrouhlení najdete u příkazu `Number.Round`. Výchozí je `RoundingMode.ToEven`. Volitelně je možné zadat i `culture` (např. en-US).


## Examples

### Example #1
Získá hodnotu `currency` z hodnoty `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Získá hodnotu `currency` z hodnoty `1,23455` pomocí funkce `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting

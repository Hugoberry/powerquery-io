---
title: Currency.From
---

# Currency.From


Torna un valor de moneda del valor proporcionat.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retorna un valor `currency` a partir del valor `value` proporcionat. Si el valor `value` proporcionat és `null`, `Currency.From` retorna `null`. Si el valor `value` proporcionat és un valor `number` dins de l'interval de moneda, la part decimal del valor `value` s'arrodoneix a 4 dígits decimals i es retorna. Si el valor `value` és d'un altre tipus, primer es convertirà a un valor `number` mitjançant `Number.FromText`. L'interval vàlid per a la moneda és de `-922,337,203,685,477.5808` a `922,337,203,685,477.5807`. Consulteu `Number.Round` per obtenir els modes d'arrodoniment disponibles. El valor per defecte és `RoundingMode.ToEven`. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Obté el valor de `moneda` de `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Obteniu el valor de `currency` de `"1.23455"` amb `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting

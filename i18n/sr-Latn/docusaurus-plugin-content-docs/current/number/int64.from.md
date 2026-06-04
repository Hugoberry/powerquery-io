---
title: Int64.From
---

# Int64.From


Kreira 64-bitni ceo broj od date vrednosti.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vraća 64-bitnu celobrojnu vrednost `number` iz datog `value`. Ako je dati `value` `null`, `Int64.From` vraća `null`. Ako je dati `value` `number` u opsegu 64-bitnog celog broja bez decimalnog dela, vraća se `value`. Ako sadrži decimalni deo, broj se zaokružuje pomoću navedenog režima zaokruživanja. Podrazumevani režim zaokruživanja je `RoundingMode.ToEven`. Ako je `value` nekog drugog tipa, biće konvertovan u `number`, koristeći `Number. FromText`. Pogledajte `Number.Round` za dostupne režime zaokruživanja. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Dobijte 64-bitnu celobrojnu `numeričku` vrednost broja `„4“`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dobijte 64-bitnu celobrojnu `number` vrednost `"4.5"` koristeći `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

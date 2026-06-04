---
title: Int8.From
---

# Int8.From


Kreira potpisani 8-bitni ceo broj iz date vrednosti.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vraća 8-bitnu celobrojnu vrednost `number` iz datog `value`. Ako je dati `value` `null`, `Int8.From` vraća `null`. Ako je dati `value` `number` u opsegu 8-bitnog celog broja bez decimalnog dela, vraća se `value`. Ako sadrži decimalni deo, broj se zaokružuje pomoću navedenog režima zaokruživanja. Podrazumevani režim zaokruživanja je `RoundingMode.ToEven`. Ako je `value` nekog drugog tipa, biće konvertovan u `number`, koristeći `Number. FromText`. Pogledajte `Number.Round` za dostupne režime zaokruživanja. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Dobijte potpisanu 8-bitnu celobrojnu `number` vrednost od `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dobijte potpisanu 8-bitnu celobrojnu `number` vrednost od `"4.5"` koristeći `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

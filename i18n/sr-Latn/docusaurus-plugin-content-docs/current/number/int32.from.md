---
title: Int32.From
---

# Int32.From


Kreira 32-bitni ceo broj iz date vrednosti.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vraća 32-bitnu celobrojnu vrednost `number` iz datog `value`. Ako je dati `value` `null`, `Int32.From` vraća `null`. Ako je dati `value` `number` u opsegu 32-bitnog celog broja bez decimalnog dela, vraća se `value`. Ako sadrži decimalni deo, broj se zaokružuje pomoću navedenog režima zaokruživanja. Podrazumevani režim zaokruživanja je `RoundingMode.ToEven`. Ako je `value` nekog drugog tipa, biće konvertovan u `number`, koristeći `Number. FromText`. Pogledajte `Number.Round` za dostupne režime zaokruživanja. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Dobijte 32-bitnu celobrojnu `number` vrednost od `"4"`.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Dobijte 32-bitnu celobrojnu `number` vrednost od `"4.5"` koristeći `RoundingMode.AwayFromZero`.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

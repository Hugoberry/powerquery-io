---
title: Currency.From
---

# Currency.From


Vraća vrednost valute iz date vrednosti.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vraća vrednost `currency` iz date vrednosti `value`. Ako je data vrednost `value` `null`, `Currency.Iz` vraća `null`. Ako je data vrednost `value` `number` u opsegu valute, decimalni deo vrednosti `value` zaokružuje se na 4 decimalne cifre i vraća se. Ako vrednost `value` pripada drugom tipu, biće prvo konvertovana u `number`, koristeći `Number.FromText`. Važeći opseg za valutu je od `-922.337.203.685.477,5808` do `922.337.203.685.477,5807`. Pogledajte `Number.Round` za dostupne režime zaokruživanja. Podrazumevani je `RoundingMode.ToEven`. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Preuzmite vrednost `currency` od `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Dobijte `currency` vrednost `"1.23455"` koristeći `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting

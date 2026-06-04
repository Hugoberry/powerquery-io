---
title: Currency.From
---

# Currency.From


Returnează o valoare monetară din valoarea dată.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnează o valoare `currency` pornind de la valoarea `value` dată. Dacă valoarea `value` dată este `null`, `Currency.From` returnează `null`. Dacă valoarea `value` dată este o valoare `number` din intervalul valorilor monetare, partea fracționară din `value` este rotunjită la 4 cifre zecimale și returnată. Dacă valoarea `value` dată este de orice alt tip, va fi convertită mai întâi la o valoare `number`utilizând `Number.FromText`. Intervalul valid pentru valori monetare este de la `-922.337.203.685.477,5808` la `922.337.203.685.477,5807`. Consultați `Number.Round` pentru a afla informații despre modurile de rotunjire disponibile. Valoarea implicită este `RoundingMode.ToEven`. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”).


## Examples

### Example #1
Obțineți valoarea `currency` `"1,23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Obțineți valoarea `currency` pentru `"1.23455"` utilizând `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting

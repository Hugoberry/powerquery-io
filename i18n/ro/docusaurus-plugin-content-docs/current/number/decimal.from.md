---
title: Decimal.From
---

# Decimal.From


Creează o valoare Decimal din valoarea dată.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnează o valoare `number` Decimal din valoarea `value` dată. Dacă valoarea `value` dată este `null`, `Decimal.From` returnează `null`. Dacă valoarea `value` dată este un `number` în intervalul de numere Decimal, se returnează `value`, altfel se returnează o eroare. Dacă valoarea `value` dată este de orice alt tip, va fi convertită într-o valoare `number` utilizând `Number.FromText`. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”).


## Examples

### Example #1
Obțineți valoarea `number` Decimal pentru `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting

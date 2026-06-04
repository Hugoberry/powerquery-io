---
title: Double.From
---

# Double.From


Creează o valoare Double din valoarea dată.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnează o valoare `number` Double din valoarea `value` dată. Dacă valoarea `value` dată este `null`, `Double.From` returnează `null`. Dacă valoarea `value` dată este un `number` în intervalul de numere Double, se returnează `value`, altfel se returnează o eroare. Dacă valoarea `value` dată este de orice alt tip, va fi convertită într-o valoare `number` utilizând `Number.FromText`. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”).


## Examples

### Example #1
Obțineți valoarea `number` Double pentru `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting

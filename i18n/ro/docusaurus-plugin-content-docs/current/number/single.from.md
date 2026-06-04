---
title: Single.From
---

# Single.From


Creează o valoare Single din valoarea dată.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnează o valoare `number` Single din valoarea `value` dată. Dacă valoarea `value` dată este `null`, `Single.From` returnează `null`. Dacă valoarea `value` dată este un `number` în intervalul de numere Single, se returnează `value`, altfel se returnează o eroare. Dacă valoarea `value` dată este de orice alt tip, va fi convertită într-o valoare `number` utilizând `Number.FromText`. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”).


## Examples

### Example #1
Obțineți valoarea `number` Single pentru `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting

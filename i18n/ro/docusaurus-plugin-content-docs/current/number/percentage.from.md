---
title: Percentage.From
---

# Percentage.From


Returnează o valoare procentuală din valoarea dată.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnează o valoare`percentage` dintr-o valoare `value` dată. Dacă `value` dată este `null`, `Percentage.From` returnează `null`. Dacă `value` dată este `text` cu un simbol la un procent de sfârșit, atunci va fi returnat numărul zecimal convertit. În caz contrar, convertiți la o valoare `number` utilizând `Number.From`. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”).


## Examples

### Example #1
Obțineți valoarea `percentage` a `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting

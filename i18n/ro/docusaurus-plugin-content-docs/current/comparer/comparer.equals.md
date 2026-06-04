---
title: Comparer.Equals
---

# Comparer.Equals


Returnează o valoare logică bazată pe verificarea de egalitate dintre cele două valori date.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Returnează o valoare `logică` pe baza verificării egalității pentru cele două valori date, `x` și `y`, utilizând `comparer`furnizat.

`comparer` este un `Comparer` care este utilizat pentru a controla comparația. Un comparator este o funcție care acceptă două argumente și returnează -1, 0 sau 1, în funcție dacă prima valoare este mai mică decât, egală cu sau mai mare decât secunda. Comparatorii pot fi utilizați pentru a furniza comparații care nu sunt sensibile la literele mari și mici sau la cultură și la setările regionale.

Următoarele comparatoare încorporate sunt disponibile în limba formulei:

-   `Comparer.Ordinal`: Utilizat pentru a efectua o comparație ordinală exactă
-   `Comparer.OrdinalIgnoreCase`: Utilizat pentru a efectua o comparație ordinală exactă, care nu este sensibilă la literele mari și mici
-   `Comparer.FromCulture`: Utilizat pentru a efectua o comparație receptivă la cultură


## Examples

### Example #1
Comparați „1” și „A” folosind setările lingvistice „en-US” pentru a determina dacă valorile sunt egale.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer

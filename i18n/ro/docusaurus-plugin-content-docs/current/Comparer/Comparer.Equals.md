---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Returnează o valoare logică bazată pe verificarea de egalitate dintre cele două valori date.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Returnează o valoare <code>logică</code> pe baza verificării egalității pentru cele două valori date, <code>x</code> și <code>y</code>, utilizând <code>comparer</code>furnizat.      <div>        <code>comparer</code> este un <code>Comparer</code> care este utilizat pentru a controla comparația.        Un comparator este o funcție care acceptă două argumente și returnează -1, 0 sau 1, în funcție dacă prima valoare este mai mică decât, egală cu sau mai mare decât secunda.        Comparatorii pot fi utilizați pentru a furniza comparații care nu sunt sensibile la literele mari și mici sau la cultură și la setările regionale.      </div>      <div>        Următoarele comparatoare încorporate sunt disponibile în limba formulei:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Utilizat pentru a efectua o comparație ordinală exactă</li> <li><code>Comparer.OrdinalIgnoreCase</code>: Utilizat pentru a efectua o comparație ordinală exactă, care nu este sensibilă la literele mari și mici</li>        <li> <code>Comparer.FromCulture</code>: Utilizat pentru a efectua o comparație receptivă la cultură</li>      </ul>


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

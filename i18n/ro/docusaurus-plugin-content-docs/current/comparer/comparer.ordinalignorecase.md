---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Returnează o funcție de comparare care nu ține cont de literele mari și mici care utilizează reguli ordinale pentru a compara valorile.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Returnează o funcție de comparare care nu este sensibilă la literele mari și mici și care utilizează reguli ordinale pentru a compara valorile furnizate `x` și `y`.  
  
O funcție de comparare acceptă două argumente și returnează -1, 0 sau 1, în funcție dacă prima valoare este mai mică decât, egală cu sau mai mare decât a doua.


## Examples

### Example #1
Utilizând reguli ordinale care nu țin cont de literele mari și mici, comparați „Abc” cu „abc”. Rețineți că „Abc” este mai mic decât „abc” când se folosește `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer

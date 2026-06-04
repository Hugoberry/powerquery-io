---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Returnează o funcție de comparare care utilizează reguli ordinale pentru a compara valorile.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Returnează o funcție de comparare și care utilizează reguli ordinale pentru a compara valorile furnizate `x` și `y`.  
  
O funcție de comparare acceptă două argumente și returnează -1, 0 sau 1, în funcție dacă prima valoare este mai mică decât, egală cu sau mai mare decât a doua.


## Examples

### Example #1
Utilizând reguli ordinale, comparați dacă enciclopædia” și „enciclopedia” sunt echivalente. Rețineți că acestea sunt echivalente utilizând `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer

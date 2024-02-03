---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Returnează o funcție de comparare pe baza culturii și sensibilității la literele mari și mici specificate.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Returnează o funcție de comparare care utilizează <code>culture</code> și sensibilitatea la literele mari și mici specificată de <code>ignoreCase</code> pentru a efectua comparații.<br />      <br />      O funcție de comparare acceptă două argumente și returnează -1, 0 sau 1, în funcție dacă prima valoare este mai mică decât, egală cu sau mai mare decât a doua.<br />      <br />      Valoarea implicită pentru <code>ignoreCase</code> este false. <code>culture</code> ar trebui să fie una dintre setările regionale acceptate de .NET Framework (de exemplu, "ro-RO").    


## Examples

### Example #1 
Comparați „a” și „A” folosind setările locale „en-US” pentru a determina dacă valorile sunt egale.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Comparați „a” și „A” folosind setările lingvistice „en-US” și ignorând majusculele pentru a determina dacă valorile sunt egale.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer

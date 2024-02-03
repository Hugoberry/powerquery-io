---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Returnează o funcție ce combină o listă de texte utilizând lungimile specificate.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Returnează o funcție ce combină o listă de valori text într-o singură valoare text utilizând lungimile specificate.


## Examples

### Example #1 
Combinați o listă de valori text prin extragerea numerelor de caractere specificate din fiecare valoare de intrare.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Combinați o listă de valori text prin extragerea numerelor de caractere specificate, după prima completare prealabilă a rezultatului cu textul șablonului.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner

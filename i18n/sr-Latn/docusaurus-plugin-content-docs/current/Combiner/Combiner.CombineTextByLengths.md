---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Vraća funkciju koja kombinuje listu teksta pomoću navedenih dužina.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Vraća funkciju koja kombinuje listu tekstualnih vrednosti u jednu tekstualnu vrednost pomoću navedenih dužina.


## Examples

### Example #1 
Kombinujte listu tekstualnih vrednosti tako što ćete izdvojiti navedene brojeve znakova iz svake ulazne vrednosti.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Kombinujte listu tekstualnih vrednosti tako što ćete izdvojiti navedene brojeve znakova, nakon prvog popunjavanja rezultata tekstom predloška.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner

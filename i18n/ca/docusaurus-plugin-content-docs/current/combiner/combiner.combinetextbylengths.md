---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


Retorna una funció que combina una llista de text mitjançant les longituds especificades.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Remarks

Retorna una funció que combina una llista de valors de text en un únic valor de text mitjançant les longituds especificades.


## Examples

### Example #1
Combina una llista de valors de text extraient els nombres especificats de caràcters de cada valor d'entrada.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2
Combina una llista de valors de text extraient els nombres especificats de caràcters, després d’emplenar primer el resultat amb el text de la plantilla.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner

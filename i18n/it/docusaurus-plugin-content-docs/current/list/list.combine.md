---
title: List.Combine
---

# List.Combine


Restituisce un unico elenco combinando più elenchi.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Remarks

Accetta un elenco di elenchi, <code>lists</code>, e sottopone a merge in un nuovo singolo elenco.


## Examples

### Example #1 
Combinare i due elenchi semplici in \{1, 2} e \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Combinare i due elenchi, \{1, 2} e \{3, \{4, 5}}, uno dei quali contiene un elenco annidato.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions

---
title: List.Zip
---

# List.Zip


## Description

Combina els elements que figuren en una mateixa posició però en llistes diferents i en torna una llista a partir d&#39;aquestes diverses llistes.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Fa una llista a partir de diverses llistes (<code>lists</code>), combina els elements que figuren en una mateixa posició i en torna una llista a partir d'aquestes diverses llistes.


## Examples

### Example #1 
Comprimeix les dues llistes simples \{1, 2} i \{3, 4}.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
Comprimeix les dues llistes simples de longituds diferents \{1, 2} i \{3}.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions

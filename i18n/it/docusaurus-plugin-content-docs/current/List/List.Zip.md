---
title: List.Zip
---

# List.Zip


## Description

Restituisce un elenco di elenchi combinando elementi nella stessa posizione in più elenchi.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Acquisisce un elenco di elenchi, <code>lists</code>, e restituisce un elenco di elenchi combinando elementi nella stessa posizione.


## Examples

### Example #1 
Comprime i due elenchi semplici \{1, 2} e \{3, 4}.
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
Comprime i due elenchi semplici di lunghezza diversa \{1, 2} e \{3}.
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

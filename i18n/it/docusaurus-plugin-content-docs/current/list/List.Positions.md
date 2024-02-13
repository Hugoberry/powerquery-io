---
title: List.Positions
---

# List.Positions


Restituisce l&#39;elenco degli offset per l&#39;input.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Restituisce l'elenco degli offset per l'elenco di input <code>list</code>.    Quando si usa List.Transform per modificare un elenco, è possibile usare l'elenco delle posizioni per fornire alla trasformazione l'accesso alla posizione.


## Examples

### Example #1 
Trovare gli offset dei valori nell&#39;elenco \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection

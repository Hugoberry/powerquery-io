---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Restituisce un elemento per un elenco di lunghezza uno e il valore predefinito per un elenco vuoto.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

Se è presente un solo elemento nell'elenco <code>list</code>, restituisce tale elemento.    Se l'elenco è vuoto, la funzione restituisce Null a meno che non sia specificato l'elemento facoltativo <code>default</code>. Se è presente più di un elemento nell'elenco, la funzione restituisce un errore.


## Examples

### Example #1 
Trovare il valore singolo nell&#39;elenco \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Trovare il valore singolo nell&#39;elenco \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Trovare il valore singolo nell&#39;elenco \{}. Se vuoto, restituire -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection

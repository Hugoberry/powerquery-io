---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Retorna l&#39;element d&#39;una única llista per a una llista de longitud u i el valor per defecte per a una llista buida.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Si només hi ha un element a la llista <code>list</code>, el retorna.    Si la llista és buida, la funció retorna el valor "null" tret que s'especifiqui un <code>default</code> opcional. Si hi ha més d'un element a la llista, la funció retorna un error.


## Examples

### Example #1 
Troba el valor senzill de la llista \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Troba el valor senzill de la llista \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Troba el valor senzill de la llista \{}. Si és buida, es retorna el valor -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection

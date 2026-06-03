---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Restituisce la porzione di `text` prima dell'oggetto `delimiter` specificato. Un valore numerico `index` facoltativo indica quale occorrenza di `delimiter` prendere in considerazione. Un elenco `index` facoltativo indica quale occorrenza di `delimiter` prendere in considerazione e se eseguire l'indicizzazione dall'inizio o dalla fine dell'input.


## Examples

### Example #1
Ottiene la porzione di "111-222-333" prima del (primo) segno meno.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Ottiene la porzione di "111-222-333" prima del secondo segno meno.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Ottiene la porzione di "111-222-333" prima del secondo segno meno a partire dalla fine.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations

---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Restituisce la porzione di `text` dopo l'oggetto `delimiter` specificato. Un valore numerico `index` facoltativo indica quale occorrenza di `delimiter` prendere in considerazione. Un elenco `index` facoltativo indica quale occorrenza di `delimiter` prendere in considerazione e se eseguire l'indicizzazione dall'inizio o dalla fine dell'input.


## Examples

### Example #1
Ottiene la porzione di "111-222-333" dopo il (primo) segno meno.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Ottiene la porzione di "111-222-333" dopo il secondo segno meno.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Ottiene la porzione di "111-222-333" dopo il secondo segno meno a partire dalla fine.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations

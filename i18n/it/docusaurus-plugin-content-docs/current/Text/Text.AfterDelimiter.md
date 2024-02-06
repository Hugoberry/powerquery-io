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

Restituisce la porzione di <code>text</code> dopo l'oggetto <code>delimiter</code> specificato.    Un valore numerico <code>index</code> facoltativo indica quale occorrenza di <code>delimiter</code> prendere in considerazione.    Un elenco <code>index</code> facoltativo indica quale occorrenza di <code>delimiter</code> prendere in considerazione e se eseguire l'indicizzazione dall'inizio o dalla fine dell'input.


## Examples

### Example #1 
Ottiene la porzione di &#34;111-222-333&#34; dopo il (primo) segno meno.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Ottiene la porzione di &#34;111-222-333&#34; dopo il secondo segno meno.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Ottiene la porzione di &#34;111-222-333&#34; dopo il secondo segno meno a partire dalla fine.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations

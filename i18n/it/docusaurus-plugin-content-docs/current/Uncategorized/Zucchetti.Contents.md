---
title: Zucchetti.Contents
---

# Zucchetti.Contents



## Syntax

```powerquery
Zucchetti.Contents(
    Url as text,
    Environment as text
) as table
```


## Details

Restituisce il contenuto di VisualQuery (vqr), report o funzioni pubblicate dai software HR Zucchetti


## Examples

### Example #1 
Richiesta elenco dei dipendenti
```powerquery
    Zucchetti.Contents("https://myurl/HRPortal/", "001"),
    ERM = Origine{[idproced="ERM"]}[Data],
    ERM_query_pbi_employee = ERM{[id="ERM_query_pbi_employee"]}[Data]
```

Result: 
```powerquery
    Table containing employee list
```




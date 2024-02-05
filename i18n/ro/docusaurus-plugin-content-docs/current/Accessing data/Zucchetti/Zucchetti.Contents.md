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

Returneaza continuturile VisualQuery (vqr), rapoarte sau functii publicate de software-ul HR Zucchetti


## Examples

### Example #1 
Cerere pentru lista angajatilor
```powerquery
    Zucchetti.Contents("https://myurl/HRPortal/", "001"),
    ERM = Origine{[idproced="ERM"]}[Data],
    ERM_query_pbi_employee = ERM{[id="ERM_query_pbi_employee"]}[Data]
```

Result: 
```powerquery
    Table containing employee list
```




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


## Remarks

Returns contents of VisualQueries (vqr), reports or functions published by the Zucchetti HR software


## Examples

### Example #1 
Request for employees list
```powerquery
    Zucchetti.Contents("https://myurl/HRPortal/", "001"),
    ERM = Origine{[idproced="ERM"]}[Data],
    ERM_query_pbi_employee = ERM{[id="ERM_query_pbi_employee"]}[Data]
```

Result: 
```powerquery
    Table containing employee list
```




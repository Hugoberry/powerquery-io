---
title: Record.ToList
---

# Record.ToList


## Description

Retourne une liste de valeurs contenant les valeurs de champ de l&#39;enregistrement d&#39;entrée.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Retourne une liste de valeurs contenant les valeurs de champ de l'entrée <code>record</code>.


## Examples

### Example #1 
Extrayez les valeurs de champ d&#39;un enregistrement.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization

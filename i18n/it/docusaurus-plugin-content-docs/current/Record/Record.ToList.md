---
title: Record.ToList
---

# Record.ToList


## Description

Restituisce l&#39;elenco dei valori contenenti i valori dei campi del record di input.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Restituisce l'elenco dei valori contenenti i valori dei campi dell'input <code>record</code>.


## Examples

### Example #1 
Estrarre i valori dei campi da un record.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization

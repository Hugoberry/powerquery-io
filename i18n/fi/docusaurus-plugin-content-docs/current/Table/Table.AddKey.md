---
title: Table.AddKey
---

# Table.AddKey


## Description

Lisää avaimen annettuun taulukkotyyppiin.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Lisää avain kohteeseen <code>table</code>, kun <code>columns</code> on kohteen sarakkeiden nimien alijoukko, joka määrittää avaimen, ja <code>isPrimary</code> määrittää, onko avain perusavain.


## Examples

### Example #1 
Lisää yksisarakkeinen perusavain taulukkoon.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation

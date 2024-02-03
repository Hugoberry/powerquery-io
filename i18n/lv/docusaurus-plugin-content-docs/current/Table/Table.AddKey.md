---
title: Table.AddKey
---

# Table.AddKey


## Description

Atslēga tiek pievienota tabulai.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Atslēga tiek pievienota tabulai <code>table</code>, kur <code>columns</code> ir atslēgu definējošais kolonnu nosaukumu saraksts, un <code>isPrimary</code> norāda, vai šī atslēga ir primārā.


## Examples

### Example #1 
Pievienojiet tabulai vienas kolonnas primāro atslēgu.
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

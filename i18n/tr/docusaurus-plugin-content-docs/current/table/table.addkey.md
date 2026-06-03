---
title: Table.AddKey
---

# Table.AddKey


Tabloya anahtar ekler.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

`table` öğesine bir anahtar ekler, burada `columns` anahtarı tanımlayan sütun adlarının listesidir ve `isPrimary`, anahtarın birincil olup olmadığını belirtir.


## Examples

### Example #1
Tabloya tek sütunlu birincil anahtar ekleyin.
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

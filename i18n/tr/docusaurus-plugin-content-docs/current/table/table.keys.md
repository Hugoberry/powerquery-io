---
title: Table.Keys
---

# Table.Keys


Belirtilen tablonun anahtarlarını döndürür.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Belirtilen tablonun anahtarlarını döndürür.


## Examples

### Example #1 
Bir tablonun anahtarlarının listesini alın.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    keys = Table.Keys(tableWithKeys)
in
    keys
```

Result: 
```powerquery
{[Columns = {"Id"}, Primary = true]}
```




## Category
Table.Transformation

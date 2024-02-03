---
title: Record.ToList
---

# Record.ToList


## Description

Girdi kaydının alan değerlerini içeren bir değer listesi döndürür.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

<code>record</code> girdisinden alan değerlerini içeren bir değer listesi döndürür.


## Examples

### Example #1 
Bir kayıttaki alan değerlerini ayıklar.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization

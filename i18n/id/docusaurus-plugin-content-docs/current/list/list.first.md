---
title: List.First
---

# List.First


Menghasilkan nilai pertama dari daftar atau default yang ditetapkan jika kosong.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Menghasilkan item pertama dalam daftar `list`, atau nilai default opsional, `defaultValue`, jika daftar kosong. Jika daftar kosong dan nilai default tidak ditetapkan, maka fungsi akan menghasilkan `null`.


## Examples

### Example #1
Mencari nilai pertama dalam daftar \{1, 2, 3\}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Mencari nilai pertama dalam daftar \{\}. Jika daftar kosong, -1 akan dihasilkan.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection

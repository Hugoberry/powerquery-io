---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Menghasilkan satu item daftar untuk daftar dengan panjang satu dan nilai default untuk daftar kosong.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Jika hanya terdapat satu item dalam daftar <code>list</code>, item tersebut akan dihasilkan.    Jika daftar kosong, fungsi akan menghasilkan null, kecuali jika <code>default</code> opsional ditetapkan. Jika terdapat lebih dari satu item dalam daftar, fungsi akan menghasilkan kesalahan.


## Examples

### Example #1 
Mencari nilai tunggal dalam daftar \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Mencari nilai tunggal dalam daftar \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Mencari nilai tunggal dalam daftar \{}. Jika kosong, -1 akan dihasilkan.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection

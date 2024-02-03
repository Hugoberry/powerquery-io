---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Mengembalikan satu item senarai untuk senarai dengan panjang satu dan nilai lalai untuk senarai kosong.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Jika hanya terdapat satu item dalam senarai <code>list</code>, mengembalikan item tersebut.    Jika senarai adalah kosong, fungsi mengembalikan nol melainkan <code>default</code> pilihan ditentukan. Jika terdapat lebih daripada satu item dalam senarai, fungsi mengembalikan ralat.


## Examples

### Example #1 
Cari nilai tunggal dalam senarai \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Cari nilai tunggal dalam senarai \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Cari nilai tunggal dalam senarai \{}. Jika kosong, kembalikan -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection

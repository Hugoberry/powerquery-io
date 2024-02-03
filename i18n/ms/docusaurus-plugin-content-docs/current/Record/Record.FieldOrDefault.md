---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Mengembalikan nilai bagi medan yang ditentukan dalam rekod atau nilai lalai jika medan tidak ditemui.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Mengembalikan nilai bagi medan <code>field</code> yang ditentukan dalam rekod <code>record</code>. Jika medan tidak ditemui, <code>defaultValue</code> pilihan dikembalikan.


## Examples

### Example #1 
Cari nilai medan &#34;Phone&#34; dalam rekod atau kembalikan nol jika ia tidak wujud.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Cari nilai medan &#34;Phone&#34; dalam rekod atau kembalikan nilai lalai jika ia tidak wujud.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection

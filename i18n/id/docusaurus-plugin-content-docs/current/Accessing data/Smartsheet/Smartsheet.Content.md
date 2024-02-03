---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Menghasilkan tabel data dari endpoint indeks Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Melakukan panggilan ke Smartsheet 2.0 REST API pada endpoint yang ditentukan dan mengubah elemen data yang dihasilkan ke tabel.


## Examples

### Example #1 
Menarik tabel informasi pengguna dari API Smartsheet
```powerquery
Smartsheet.Content("pengguna")
```

Result: 
```powerquery
Tabel dengan informasi pengguna yang dihasilkan oleh API Smartsheet
```




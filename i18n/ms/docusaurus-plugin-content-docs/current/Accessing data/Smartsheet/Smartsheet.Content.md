---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Mengembalikan jadual data dari satu titik tamat indeks Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Membuat panggilan ke REST API Smartsheet 2.0 di titik tamat tertentu dan mengubah elemen data yang dikembalikan menjadi jadual.


## Examples

### Example #1 
Menarik jadual maklumat pengguna daripada API Smartsheet
```powerquery
Smartsheet.Content("pengguna")
```

Result: 
```powerquery
Jadual dengan maklumat pengguna seperti yang dikembalikan oleh API Smartsheet
```




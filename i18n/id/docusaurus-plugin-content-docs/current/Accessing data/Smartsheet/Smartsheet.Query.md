---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Menghasilkan hasil JSON dari API Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Melakukan panggilan ke Smartsheet 2.0 REST API pada endpoint yang ditentukan dan menghasilkan hasil sebagai data JSON.


## Examples

### Example #1 
Menarik data dari endpoint API Smartsheet lembar dengan argumen tambahan yang ditentukan
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Tabel dengan informasi lembar yang dihasilkan oleh API Smartsheet
```




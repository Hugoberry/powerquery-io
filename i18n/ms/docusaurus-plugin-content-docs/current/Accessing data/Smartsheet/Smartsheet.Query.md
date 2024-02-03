---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Mengembalikan keputusan JSON daripada API Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Membuat panggilan ke REST API Smartsheet 2.0 di titik tamat tertentu dan mengembalikan keputusan sebagai rekod JSON.


## Examples

### Example #1 
Menarik data dari titik tamat API Smartsheet helaian dengan argumen tambahan dinyatakan
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Jadual dengan maklumat helaian seperti yang dikembalikan oleh API Smartsheet
```




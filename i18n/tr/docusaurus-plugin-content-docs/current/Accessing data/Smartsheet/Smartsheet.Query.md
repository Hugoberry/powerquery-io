---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Smartsheet API&#39;sinden bir JSON sonucu döndürür


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Belirtilen uç noktadan Smartsheet 2.0 REST API'sine çağrıda bulunur ve sonuçları bir JSON kaydı olarak döndürür.


## Examples

### Example #1 
Ek olarak belirtilen bağımsız değişkenlerle birlikte sayfalardaki Smartsheet API uç noktasından veri çeker
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Smartsheet API'si tarafından döndürülen şekilde, sayfalarla ilgili bilgilerin yer aldığı bir tablo
```




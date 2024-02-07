---
title: Smartsheet.Content
---

# Smartsheet.Content


Smartsheet dizin uç noktasına ilişkin verilerin yer aldığı bir tablo döndürür.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

Belirtilen uç noktadan Smartsheet 2.0 REST API'sine çağrıda bulunur ve bir tabloya döndürülen veri öğesini dönüştürür.


## Examples

### Example #1 
Smartsheet API&#39;sinden kullanıcılarla ilgili bilgilerin yer aldığı bir tablo çeker
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Smartsheet API'si tarafından döndürülen şekilde, kullanıcılarla ilgili bilgilerin yer aldığı bir tablo
```




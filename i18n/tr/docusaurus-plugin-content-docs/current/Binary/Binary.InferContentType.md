---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

İkili akışı okur ve akışın içerik türü ve biçim bilgilerini belirlemeye çalışır.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Çıkarsanan MIME türünü içeren Content.Type alanıyla bir kayıt döndürür.    Çıkarsanan içerik türü metin/\* ise ve bir kodlama kod sayfası algılandıysa ek olarak akışın kodlamasını içeren Content.Encoding alanını döndürür.    Çıkarsanan içerik türü metin/csv ise ve biçimi sınırlandırılmışsa ayrıca olası sınırlayıcıların analizini içeren bir tabloya sahip Csv.PotentialDelimiter alanını döndürür.    Çıkarsanan içerik türü metin/csv ise ve biçimi sabit genişlikteyse ayrıca olası sabit genişlikte sütun konumları analizinin bir listesini içeren Csv.PotentialPositions alanını döndürür.



## Category
Binary

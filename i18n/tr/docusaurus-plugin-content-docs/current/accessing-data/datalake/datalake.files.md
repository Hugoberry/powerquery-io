---
title: DataLake.Files
---

# DataLake.Files


Azure Data Lake Storage hesabınızın URL'sini girin.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Azure Data Lake Storage 1. Nesil `URL'sinde` bulunan her dosya için bir satır içeren bir tablo döndürür. Her satır, dosyanın özelliklerini ve içeriğinin bir bağlantısını içerir.



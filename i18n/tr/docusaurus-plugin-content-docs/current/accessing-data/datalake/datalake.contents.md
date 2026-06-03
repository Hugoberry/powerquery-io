---
title: DataLake.Contents
---

# DataLake.Contents


Azure Data Lake Storage 1. Nesil hesabınızın URL'sini girin.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Azure Data Lake Storage 1. Nesil `URL'sinde` bulunan her klasör ve dosyaya ilişkin satır içeren bir tablo döndürür. Her satır, klasör veya dosya özelliklerinin yanı sıra bunların içeriğine yönelik bir bağlantı içerir.



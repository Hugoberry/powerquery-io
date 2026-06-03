---
title: Folder.Contents
---

# Folder.Contents


Belirtilen klasörde bulunan dosya ve klasörlerin özelliklerini ve içeriğini içeren bir tablo geri gönderir.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

`path` klasöründeki her klasör ve dosya için satır içeren bir tablo döndürür. Her satır, klasörün veya dosyanın özelliklerini ve içeriğine yönelik bağlantı içerir. `options` parametresi şu anda yalnızca dahili kullanıma yöneliktir.



## Category
Accessing data

---
title: Folder.Files
---

# Folder.Files


Belirtilen klasörde ve alt klasörlerde bulunan dosya ve klasörlerin özellik ve içeriğini içeren bir tablo döndürür.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

<code>path</code> klasöründeki ve tüm alt klasörlerindeki her klasör ve dosya için satır içeren bir tablo döndürür. Her satır, dosyanın özelliklerini ve içeriğine yönelik bağlantı içerir. <code>options</code> parametresi şu anda yalnızca dahili kullanıma yöneliktir.



## Category
Accessing data

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

Belirtilen klasörde ve tüm alt klasörlerinde bulunan her dosya için bir satır içeren bir tablo döndürür.

-   `path`: Dosyaları almak istediğiniz klasörün yolu. Sağlanan klasör yolu geçerli bir mutlak yol olmalıdır.
-   `options`: (İsteğe bağlı) Bu parametre şu anda yalnızca iç kullanım içindir.

Döndürülen tablonun her satırı, dosyanın özelliklerini ve içeriğine bir bağlantı içerir.


## Examples

### Example #1
C:\\test-examples\\example-folder ve tüm alt klasörlerinde bulunan tüm dosyaları içeren bir tablo döndürür.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data

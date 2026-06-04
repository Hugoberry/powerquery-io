---
title: Folder.Files
---

# Folder.Files


Mengembalikan jadual yang mengandungi sifat dan kandungan fail yang ditemui dalam folder dan subfolder yang ditentukan.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual yang mengandungi satu baris untuk setiap fail yang ditemui dalam folder yang ditentukan dan semua subfoldernya.

-   `path`: Laluan ke folder yang anda ingin ambil fail. Laluan folder yang dibekalkan mestilah laluan mutlak yang sah.
-   `options`: (Pilihan) Pada masa ini, parameter ini hanya untuk kegunaan dalaman.

Setiap baris bagi jadual yang dikembalikan mengandungi sifat fail dan pautan kepada kandungannya.


## Examples

### Example #1
Kembalikan satu jadual yang mengandungi semua fail yang ditemui dalam C:\\test-examples\\example-folder dan semua subfoldernya.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data

---
title: Folder.Files
---

# Folder.Files


Menghasilkan tabel berisi properti dan konten dari file yang ditemukan dalam folder dan subfolder yang ditetapkan.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel yang berisi baris untuk setiap file yang ditemukan dalam folder yang ditentukan beserta semua subfoldernya.

-   `path`: Jalur ke folder yang ingin Anda ambil filenya. Jalur folder yang disediakan harus jalur absolut yang valid.
-   `options`: (Opsional) Parameter ini saat ini hanya ditujukan untuk penggunaan internal.

Setiap baris tabel yang diambil berisi properti file dan tautan ke kontennya.


## Examples

### Example #1
Menghasilkan tabel yang berisi semua file yang ditemukan dalam C:\\test-examples\\example-folder beserta semua subfoldernya.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data

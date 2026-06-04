---
title: Folder.Files
---

# Folder.Files


Көрсетілген қалтадағы және ішкі қалталардағы файлдардың сипаттарын және мазмұнын қамтитын кестені қайтарады.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Көрсетілген қалтада және оның барлық ішкі қалталарында табылған әрбір файл үшін жолды қамтитын кестені қайтарады.

-   `path`: Файлдарды алу үшін пайдаланғыңыз келетін қалтаға апаратын жол. Көрсетілген қалта жолы жарамды абсолютті жол болуы керек.
-   `options`: (Міндетті емес) Бұл параметр қазіргі уақытта тек ішкі пайдалануға арналған.

Қайтарылған кестенің әрбір жолы файлдың қасиеттерін және оның мазмұнына сілтемені қамтиды.


## Examples

### Example #1
C:\\test-examples\\example-folder және оның барлық ішкі қалталарында табылған барлық файлдарды қамтитын кестені қайтарыңыз.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data

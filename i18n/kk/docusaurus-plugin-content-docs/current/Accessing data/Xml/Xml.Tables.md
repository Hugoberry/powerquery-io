---
title: Xml.Tables
---

# Xml.Tables


## Description

XML құжатының мазмұнын тураланған кестелердің енгізілген жиыны ретінде қайтарады.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

XML құжатының мазмұнын тураланған кестелердің енгізілген жиыны ретінде қайтарады.


## Examples

### Example #1 
Жергілікті xml файлының мазмұнын шығарып алу.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data

---
title: Xml.Tables
---

# Xml.Tables


## Description

Pateikiamas XML dokumento turinys kaip įdėtasis plokščiųjų lentelių rinkinys.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Pateikiamas XML dokumento turinys kaip įdėtasis plokščiųjų lentelių rinkinys.


## Examples

### Example #1 
Gaukite vietinio XML failo turinį.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data

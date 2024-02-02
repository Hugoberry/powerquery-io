---
title: Xml.Tables
---

# Xml.Tables


## Description

Returns the contents of the XML document as a nested collection of flattened tables.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Returns the contents of the XML document as a nested collection of flattened tables.


## Examples

### Example #1 
Retrieve the contents of a local xml file.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data

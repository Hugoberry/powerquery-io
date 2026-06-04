---
title: Xml.Tables
---

# Xml.Tables


Tiek atgriezts XML dokumenta saturs kā izplātu tabulu ligzdota kolekcija.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Tiek atgriezts XML dokumenta saturs kā izplātu tabulu ligzdota kolekcija.


## Examples

### Example #1
Izgūstiet lokāla xml faila saturu.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data

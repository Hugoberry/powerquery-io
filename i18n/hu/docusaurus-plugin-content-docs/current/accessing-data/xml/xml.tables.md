---
title: Xml.Tables
---

# Xml.Tables


Az XML-dokumentum tartalmát adja vissza egybesimított táblák egymásba beágyazott gyűjteményeként.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Az XML-dokumentum tartalmát adja vissza egybesimított táblák egymásba beágyazott gyűjteményeként.


## Examples

### Example #1
Egy helyi XML-fájl tartalmának lekérése.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data

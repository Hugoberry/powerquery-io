---
title: Xml.Tables
---

# Xml.Tables


Επιστρέφει τα περιεχόμενα του εγγράφου XML ως ένθετη συλλογή πινάκων που έχουν μετατραπεί σε επίπεδη μορφή.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Επιστρέφει τα περιεχόμενα του εγγράφου XML ως ένθετη συλλογή πινάκων που έχουν μετατραπεί σε επίπεδη μορφή.


## Examples

### Example #1
Retrieve the contents of a local XML file.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data

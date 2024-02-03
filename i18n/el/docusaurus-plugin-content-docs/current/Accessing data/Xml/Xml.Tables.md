---
title: Xml.Tables
---

# Xml.Tables


## Description

Επιστρέφει τα περιεχόμενα του εγγράφου XML ως ένθετη συλλογή πινάκων που έχουν μετατραπεί σε επίπεδη μορφή.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Επιστρέφει τα περιεχόμενα του εγγράφου XML ως ένθετη συλλογή πινάκων που έχουν μετατραπεί σε επίπεδη μορφή.


## Examples

### Example #1 
Ανάκτηση των περιεχομένων ενός τοπικού αρχείου XML.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data

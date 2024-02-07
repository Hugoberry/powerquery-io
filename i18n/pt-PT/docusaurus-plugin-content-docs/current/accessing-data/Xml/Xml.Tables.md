---
title: Xml.Tables
---

# Xml.Tables


Devolve o conteúdo do documento XML como uma coleção aninhada de tabelas simples.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Devolve o conteúdo do documento XML como uma coleção aninhada de tabelas simples.


## Examples

### Example #1 
Obter o conteúdo de um ficheiro xml local.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data

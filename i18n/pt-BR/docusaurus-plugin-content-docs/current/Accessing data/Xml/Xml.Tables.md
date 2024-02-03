---
title: Xml.Tables
---

# Xml.Tables


## Description

Retorna o conteúdo do documento XML como uma coleção aninhada de tabelas niveladas.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Retorna o conteúdo do documento XML como uma coleção aninhada de tabelas niveladas.


## Examples

### Example #1 
Recupere o conteúdo de um arquivo xml local.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data

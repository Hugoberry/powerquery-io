---
title: Smartsheet.Tables
---

# Smartsheet.Tables


## Description

Vrátí tabulku listů, sestav, složek a pracovních prostorů z rozhraní Smartsheet API.


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Details

Vrátí vnořenou tabulku dostupných listů, sestav, složek a pracovních prostorů z rozhraní Smartsheet API.


## Examples

### Example #1 
Vrátí listy, složky, sestavy a pracovní prostory na nejvyšší úrovni hierarchie Smartsheet.
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
Tabulka složek, sestav a pracovních prostorů z nejvyšší úrovně hierarchie Smartsheet
```




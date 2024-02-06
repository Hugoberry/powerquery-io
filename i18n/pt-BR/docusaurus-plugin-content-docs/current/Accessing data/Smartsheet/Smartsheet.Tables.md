---
title: Smartsheet.Tables
---

# Smartsheet.Tables


Retorna uma tabela de planilhas, relatórios, pastas e workspaces da API do Smartsheet


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Remarks

Retorna uma tabela aninhada das planilhas, relatórios, pastas e workspaces disponíveis da API do Smartsheet.


## Examples

### Example #1 
Retorna planilhas, pastas, relatórios e workspaces disponíveis no nível superior da hierarquia do Smartsheet
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
Uma tabela de pastas, relatórios e workspaces do nível superior da hierarquia do Smartsheet
```




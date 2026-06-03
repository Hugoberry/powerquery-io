---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Devolve a data e hora atuais no fuso horário local.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Devolve um valor de `datetime` definido para a data e hora atuais no system.  
  
O valor devolvido por esta função depende se está a executar a consulta num computador local ou online. Por exemplo, se executar a sua consulta num sistema localizado no Fuso Horário do Pacífico dos E.U.A., Power Query Ambiente de Trabalho devolve a data e hora definidas no seu computador local. No entanto, se executar a sua consulta na cloud, o Power Query Online devolve a hora UTC porque está a ler o tempo definido nas máquinas virtuais da cloud, que estão todas definidas como UTC.


## Examples

### Example #1
Invocar esta função num computador local com Power Query Ambiente de Trabalho.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Disponibilizar esta função na cloud em execução Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime

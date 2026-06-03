---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Retorna a data e a hora atuais no fuso horário local.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Retorna um valor `datetime` definido como a data e a hora atuais no system.  
  
O valor retornado por essa função depende se você está executando a consulta em um computador local ou online. Por exemplo, se você executar sua consulta em um sistema localizado no Fuso Horário do Pacífico dos EUA, o Power Query Desktop retornará a data e a hora definidas no computador local. No entanto, se você executar sua consulta na nuvem, o Power Query Online retornará o horário UTC porque ele está lendo o tempo definido nas máquinas virtuais de nuvem, que estão todas definidas como UTC.


## Examples

### Example #1
Invoque esta função em um computador local executando Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Invoque esta função na nuvem que executa Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime

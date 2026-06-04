---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Devolve a data e a hora actuais no fuso horario local.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Devolve un valor `data` fixado á data e hora actual do sistema.  
  
O valor devolto por esta función depende de se está executando a súa consulta nunha máquina local ou en liña. Por exemplo, se executa a súa consulta nun sistema situado na zona horaria do Pacífico dos Estados Unidos, Power Query Desktop devolve a data e hora establecida na súa máquina local. Non obstante, se executas a túa consulta na nube, Power Query Online devolve o tempo UTC porque está lendo o tempo establecido nas máquinas virtuais na nube, que están todos configurados para UTC.


## Examples

### Example #1
Invoca esta función nunha máquina local que funciona Power Query Escritorio.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Invoca esta función na nube que se executa Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime

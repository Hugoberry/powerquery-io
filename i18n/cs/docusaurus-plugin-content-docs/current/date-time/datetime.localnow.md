---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Vrátí aktuální datum a čas v místním časovém pásmu.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Vrátí hodnotu `datetime` nastavenou na aktuální datum a čas v souboru system.  
  
Hodnota vrácená touto funkcí závisí na tom, jestli svůj dotaz spouštíte v místním počítači nebo online. Pokud například spustíte dotaz v systému umístěném v časovém pásmu USA a Tichomoří, vrátí Power Query Desktop datum a čas nastavený v místním počítači. Pokud ale svůj dotaz spustíte v cloudu, vrátí Power Query Online čas UTC, protože čte čas nastavený na cloudových virtuálních počítačích, které jsou všechny nastavené na UTC.


## Examples

### Example #1
Vyvolejte tuto funkci na místním počítači, na kterém běží Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Vyvolejte tuto funkci v cloudu, který běží Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime

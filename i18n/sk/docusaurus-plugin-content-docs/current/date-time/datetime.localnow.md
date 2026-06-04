---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Vráti aktuálny dátum a čas v miestnom časovom pásme.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Vráti hodnotu `dátumu a času` nastavenú na aktuálny dátum a čas v systéme.  
  
Hodnota vrátená touto funkciou závisí od toho, či spúšťate svoj dotaz v lokálnom počítači alebo online. Ak napríklad spustíte dotaz v systéme, ktorý sa nachádza v americkom tichomorskom časovom pásme, funkcia Power Query Desktop vráti dátum a čas nastavený v lokálnom počítači. Ak však dotaz spustíte v cloude, služba Power Query Online vráti čas UTC, pretože číta čas nastavený na cloudových virtuálnych počítačoch, ktoré sú všetky nastavené na UTC.


## Examples

### Example #1
Vyvolajte túto funkciu v lokálnom počítači so spustenou aplikáciou Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Vyvolajte túto funkciu v cloude spustenom Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime

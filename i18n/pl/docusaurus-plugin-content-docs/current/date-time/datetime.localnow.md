---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Zwraca bieżącą datę i godzinę w lokalnej strefie czasowej.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Zwraca `wartość typu datetime` ustawioną na bieżącą datę i godzinę w systemie.  
  
Wartość zwrócona przez tę funkcję zależy od tego, czy zapytanie jest uruchamiane na komputerze lokalnym, czy w trybie online. Jeśli na przykład uruchomisz zapytanie w systemie znajdującym się w strefie czasowej Pacyfiku w Stanach Zjednoczonych, program Power Query Desktop zwróci datę i godzinę ustawioną na komputerze lokalnym. Jeśli jednak uruchomisz zapytanie w chmurze, funkcja Power Query Online zwróci czas UTC, ponieważ odczytuje czas ustawiony na maszynach wirtualnych w chmurze ustawionych na czas UTC.


## Examples

### Example #1
Wywołaj tę funkcję na komputerze lokalnym z uruchomionym programem Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Wywołaj tę funkcję w chmurze z uruchomioną usługą Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime

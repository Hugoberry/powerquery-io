---
title: Duration.ToText
---

# Duration.ToText


Zwraca tekst w formie „d.g:m:s”.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Zwraca tekstową reprezentację w formie „dzień.godzina:minuty:sekundy” dla danej wartości czasu trwania `duration`.

-   `duration`: `Czas trwania`, dla którego jest obliczana reprezentacja tekstowa.
-   `format`: *(opcjonalnie)* Przestarzałe, wartość inna niż null spowoduje zgłoszenie błędu.


## Examples

### Example #1
Przekonwertuj wartość `#duration(2, 5, 55, 20)` na wartość tekstową.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration

---
title: DateTimeZone.From
---

# DateTimeZone.From


Tworzy wartość typu datetimezone na podstawie danej wartości.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Tworzy `datetimezone` na podstawie podanej wartości.

-   `value`: wartość użyta do utworzenia `datetimezone`.
-   `culture`: (Opcjonalnie) Kultura używana podczas przekształcania wartości (na przykład „en-US”).

Wartości następujących typów można przekonwertować na wartość `datetimezone`:

-   `text`: zwraca wartość `datetimezone` z reprezentacji tekstowej. Aby uzyskać szczegółowe informacje, zobacz `DateTimeZone.FromText`.
-   `date`: zwraca `datetimezone` `value` jako składnik daty, `12:00:00 AM` jako składnik czasu i przesunięcie odpowiadające lokalnej strefie czasowej.
-   `datetime`: zwraca `datetimezone` jako `value` datę i przesunięcie odpowiadające lokalnej strefie czasowej.
-   `datetimezone`: zwraca wartość `value`.
-   `time`: zwraca kod `datetimezone` z datą równoważną dacie automatyzacji OLE `0` jako składnik daty, `value` jako składnik godziny i przesunięcie odpowiadające lokalnej strefie czasowej. Data automatyzacji OLE składa się z liczby zmiennoprzecinkowej, której całkowitym składnikiem jest liczba dni przed północą lub po północy, 30 grudnia 1899 r. i której składnik ułamkowy reprezentuje godzinę w tym dniu podzieloną przez 24. Na przykład północ, 31 grudnia 1899 jest reprezentowana przez 1,0; 6:00, 1 stycznia 1900 r. jest reprezentowane przez 2,25; północ, 29 grudnia 1899 r. jest reprezentowana przez -1,0; i 6:00, 29 grudnia 1899 r. są reprezentowane przez -1,25. Wartość podstawowa to północ, 30 grudnia 1899 r. Wartość minimalna to północ, 1 stycznia 0100. Wartość maksymalna to ostatnia chwila 31 grudnia 9999 r.
-   `number`: zwraca kod `datetimezone` z odpowiednikiem daty/godziny daty automatyzacji OLE wyrażonym przez `value` i przesunięciem odpowiadającym lokalnej strefie czasowej.
-   `null`: zwraca `null`.

Jeśli `value` jest innego typu, zwracany jest błąd.  
  
Wartość przesunięcia odpowiadającego lokalnej strefie czasowej jest inna w przypadku uruchamiania tej funkcji lokalnie, a nie w trybie online. Po uruchomieniu lokalnie zwracana jest lokalna strefa czasowa. Po uruchomieniu w trybie online zwracana jest strefa czasowa UTC (+00:00).


## Examples

### Example #1
Konwertuj tekstową reprezentację daty, godziny i strefy czasowej na wartość `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Przekonwertuj tekstową reprezentację brazylijskiej portugalskiej daty, godziny i strefy czasowej na wartość `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Przekonwertuj liczbę reprezentującą 1 stycznia 2025 r., godz. 12:00 na wartość `datetimezone`. Strefa czasowa w wyniku zależy od tego, czy przykład jest uruchamiany lokalnie, czy w trybie online.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone

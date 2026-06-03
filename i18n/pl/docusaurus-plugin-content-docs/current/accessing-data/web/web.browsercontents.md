---
title: Web.BrowserContents
---

# Web.BrowserContents


Zwraca kod HTML dla określonego adresu URL w przypadku wyświetlenia w przeglądarce sieci Web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Zwraca kod HTML dla określonego `url`, wyświetlany przez przeglądarkę internetową. Można podać opcjonalny parametr rekordu, `options`, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola:

-   `ApiKeyName`: Jeśli witryna docelowa ma pojęcie klucza interfejsu API, ten parametr może być użyty do określenia nazwy (nie wartości) parametru klucza, który musi być użyty w adresie URL. Rzeczywista wartość klucza jest podana w poświadczeniach.
-   `WaitFor`: Określa warunek oczekiwania przed pobraniem HTML, oprócz oczekiwania na załadowanie strony (co jest zawsze wykonywane). Może to być rekord zawierający pola limitu czasu i/lub selektora. Jeśli zostanie określony tylko limit czasu, funkcja będzie czekać przez określony czas przed pobraniem kodu HTML. Jeśli określono zarówno selektor, jak i limit czasu, a limit czasu upłynie przed pojawieniem się selektora na stronie, zostanie zgłoszony błąd. Jeśli wybrano selektor bez limitu czasu, zostanie zastosowany domyślny limit czasu wynoszący 30 sekund.


## Examples

### Example #1
Zwraca kod HTML dla witryny https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Zwraca kod HTML dla witryny https://microsoft.com po oczekiwaniu na pojawienie się selektora CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Zwraca kod HTML dla witryny https://microsoft.com po odczekaniu dziesięciu sekund.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Zwraca kod HTML dla witryny https://microsoft.com po oczekiwaniu do dziesięciu sekund na pojawienie się selektora CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data

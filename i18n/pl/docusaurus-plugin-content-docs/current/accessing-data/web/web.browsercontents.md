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

Zwraca kod HTML dla określonego elementu <code>url</code> w sposób, w jaki widzi go przeglądarka internetowa. Można podać opcjonalny parametr rekordu, <code>options</code>, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola: <ul> <li><code>ApiKeyName</code>: Jeśli w witrynie docelowej jest używany klucz interfejsu API, za pomocą tego parametru można określić nazwę (nie wartość) parametru klucza, który musi być używany w adresie URL. Rzeczywista wartość klucza jest udostępniana w poświadczeniu.</li> <li><code>WaitFor</code>: określa warunek oczekiwania przed pobraniem kodu HTML, oprócz oczekiwania na załadowanie strony (co jest zawsze wykonywane). Może to być rekord zawierający pola limitu czasu i/lub selektora. Jeśli zostanie określony tylko limit czasu, funkcja będzie czekać przez określony czas przed pobraniem kodu HTML. Jeśli zostanie określony zarówno selektor, jak i limit czasu, a limit czasu upłynie, zanim selektor będzie istniał na stronie, zostanie zgłoszony błąd. Jeśli wybrano selektor bez limitu czasu, zostanie zastosowany domyślny limit czasu wynoszący 30 sekund.</li> </ul>    


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
Uzyskiwanie dostępu do danych

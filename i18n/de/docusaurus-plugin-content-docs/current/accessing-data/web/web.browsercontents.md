---
title: Web.BrowserContents
---

# Web.BrowserContents


Gibt den HTML-Code für die angegebene URL, wie von einem Webbrowser angezeigt, zurück.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Gibt den HTML-Code für die angegebene `url`zurück, wie von einem Webbrowser angezeigt. Ein optionaler Datensatzparameter, `options`, kann zur Angabe zusätzlicher Eigenschaften angegeben werden. Der Datensatz kann die folgenden Felder enthalten:

-   `ApiKeyName`: Wenn die Zielwebsite über einen API-Schlüssel verfügt, kann dieser Parameter verwendet werden, um den Namen (nicht den Wert) des Schlüsselparameters anzugeben, der in der URL verwendet werden muss. Der tatsächliche Schlüsselwert wird in der Anmeldeinformation angegeben.
-   `WaitFor`: Gibt eine Bedingung an, auf die vor dem Herunterladen des HTML-Codes gewartet werden soll, zusätzlich zum Warten auf das Laden der Seite (was immer geschieht). Kann ein Datensatz sein, der Timeout- und/oder Selektor-Felder enthält. Wenn nur ein Timeout angegeben ist, wartet die Funktion die angegebene Zeitspanne ab, bevor der HTML-Code heruntergeladen wird. Wenn sowohl ein Selektor als auch ein Timeout angegeben werden und das Timeout abläuft, bevor der Selektor auf der Seite vorhanden ist, wird ein Fehler ausgelöst. Wenn Selektor ohne Timeout angegeben wird, wird ein Standardtimeout von 30 Sekunden angewendet.


## Examples

### Example #1
Gibt den HTML-Code für https://microsoft.com zurück.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Gibt den HTML-Code für https://microsoft.com zurück, nachdem auf eine CSS-Auswahl gewartet wurde.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Gibt den HTML-Code für https://microsoft.com zurück, nachdem zehn Sekunden lang gewartet wurde.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Gibt den HTML-Code für https://microsoft.com zurück, nachdem für bis zu zehn Sekunden auf eine CSS-Auswahl gewartet wurde.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data

---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Tworzy wartość typu datetimezone na podstawie danej wartości.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Zwraca wartość typu <code>datetimezone</code> z danej wartości parametru <code>value</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).Jeśli dany parametr <code>value</code> jest wartością <code>null</code>, funkcja <code>DateTimeZone.From</code> zwraca wartość <code>null</code>. Jeśli dany parametr <code>value</code> jest wartością typu <code>datetimezone</code>, zwracana jest wartość <code>value</code>. Na wartość typu <code>datetimezone</code> można konwertować wartości następujących typów:      <ul>        <li><code>text</code>: wartość typu <code>datetimezone</code> z reprezentacji tekstowej. Zapoznaj się z opisem funkcji <code>DateTimeZone.FromText</code>, aby uzyskać szczegółowe informacje.</li>        <li><code>date</code>: wartość typu <code>datetimezone</code> z wartością <code>value</code> jako składnikiem daty, wartością <code>12:00:00 AM</code> jako składnikiem godziny oraz przesunięciem odpowiadającym lokalnej strefie czasowej.</li>        <li><code>datetime</code>: wartość typu <code>datetimezone</code> z wartością <code>value</code> jako wartością daty/godziny oraz przesunięciem odpowiadającym lokalnej strefie czasowej.</li>        <li><code>time</code>: wartość typu <code>datetimezone</code> z odpowiednikiem daty w formacie daty automatyzacji łączenia i osadzania obiektów o wartości <code>0</code> jako składnikiem daty, wartością <code>value</code> jako składnikiem godziny oraz przesunięciem odpowiadającym lokalnej strefie czasowej.</li>        <li><code>number</code>: wartość typu <code>datetimezone</code> z odpowiednikiem daty/godziny w formacie daty automatyzacji łączenia i osadzania obiektów wyrażonym przez wartość <code>value</code> oraz z przesunięciem odpowiadającym lokalnej strefie czasowej.</li>      </ul>Jeśli wartość parametru <code>value</code> jest innego typu, zwracany jest błąd.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; na wartość typu &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone

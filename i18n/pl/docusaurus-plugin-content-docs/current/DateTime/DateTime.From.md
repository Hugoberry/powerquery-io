---
title: DateTime.From
---

# DateTime.From


Tworzy wartość typu datetime na podstawie danej wartości.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Zwraca wartość typu <code>datetime</code> z danej wartości parametru <code>value</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).Jeśli dany parametr <code>value</code> ma wartość <code>null</code>, funkcja <code>DateTime.From</code> zwraca wartość <code>null</code>. Jeśli dany parametr <code>value</code> ma wartość typu <code>datetime</code>, zwracana jest wartość <code>value</code>. Na wartość typu <code>datetime</code> można konwertować wartości następujących typów:      <ul>        <li><code>text</code>: wartość typu <code>datetime</code> z reprezentacji tekstowej. Zapoznaj się z opisem funkcji <code>DateTime.FromText</code>, aby uzyskać szczegółowe informacje.</li>        <li><code>date</code>: wartość typu <code>datetime</code> z wartością <code>value</code> jako składnikiem daty i wartością <code>12:00:00 AM</code> jako składnikiem godziny.</li>        <li><code>datetimezone</code>: lokalny odpowiednik wartości <code>value</code> w formacie <code>datetime</code>.</li>        <li><code>time</code>: wartość typu <code>datetime</code> z odpowiednikiem daty w formacie daty automatyzacji łączenia i osadzania obiektów o wartości <code>0</code> jako składnikiem daty i wartością <code>value</code> jako składnikiem godziny.</li>        <li><code>number</code>: odpowiednik wartości typu <code>datetime</code> w formacie daty automatyzacji łączenia i osadzania obiektów wyrażony przez wartość <code>value</code>.</li>      </ul>Jeśli wartość parametru <code>value</code> jest innego typu, zwracany jest błąd.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; na wartość typu &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Przekonwertuj wartość &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; na wartość typu &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime

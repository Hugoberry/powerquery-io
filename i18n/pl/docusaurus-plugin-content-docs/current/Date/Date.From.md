---
title: Date.From
---

# Date.From


Tworzy datę na podstawie danej wartości.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Zwraca wartość typu <code>date</code> z danej wartości parametru <code>value</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).Jeśli dany parametr <code>value</code> ma wartość <code>null</code>, funkcja <code>Date.From</code> zwraca wartość <code>null</code>. Jeśli dany parametr <code>value</code> ma wartość typu <code>date</code>, zwracana jest wartość <code>value</code>. Na wartość typu <code>date</code> można konwertować wartości następujących typów:      <ul>        <li><code>text</code>: wartość typu <code>date</code> z reprezentacji tekstowej. Zapoznaj się z opisem funkcji <code>Date.FromText</code>, aby uzyskać szczegółowe informacje.</li>        <li><code>datetime</code>: składnik daty z wartości <code>value</code>.</li>        <li><code>datetimezone</code>: składnik daty lokalnego odpowiednika typu data/godzina o wartości <code>value</code>.</li>        <li><code>number</code>: składnik daty odpowiednika typu data/godzina w formacie daty automatyzacji łączenia i osadzania obiektów wyrażony przez wartość <code>value</code>.</li>      </ul>Jeśli wartość parametru <code>value</code> jest innego typu, zwracany jest błąd.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;43910&lt;/code&gt; na wartość typu &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Przekonwertuj wartość &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; na wartość typu &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date

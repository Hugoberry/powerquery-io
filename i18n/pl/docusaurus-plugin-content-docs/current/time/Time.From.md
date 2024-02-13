---
title: Time.From
---

# Time.From


Tworzy godzinę na podstawie danej wartości.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Zwraca wartość typu <code>time</code> z danej wartości parametru <code>value</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).Jeśli dany parametr <code>value</code> ma wartość <code>null</code>, funkcja <code>Time.From</code> zwraca wartość <code>null</code>.  Jeśli dany parametr <code>value</code> ma wartość typu <code>time</code>, zwracana jest wartość <code>value</code>. Na wartość typu <code>time</code> można konwertować wartości następujących typów:      <ul>        <li><code>text</code>: wartość typu <code>time</code> z reprezentacji tekstowej. Zobacz opis funkcji <code>Time.FromText</code>, aby uzyskać szczegółowe informacje.</li>        <li><code>datetime</code>: składnik godziny z wartości <code>value</code>.</li>        <li><code>datetimezone</code>: składnik godziny z lokalnego odpowiednika typu data/godzina o wartości <code>value</code>.</li>        <li><code>number</code>: odpowiednik wartości typu <code>time</code> dla liczby ułamkowych dni wyrażonej przez wartość <code>value</code>. Jeśli wartość parametru <code>value</code> jest ujemna albo większa lub równa 1, jest zwracany błąd.</li>      </ul>Jeśli wartość parametru <code>value</code> jest innego typu, jest zwracany błąd.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;0.7575&lt;/code&gt; na wartość typu &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Przekonwertuj wartość &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; na wartość typu &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time

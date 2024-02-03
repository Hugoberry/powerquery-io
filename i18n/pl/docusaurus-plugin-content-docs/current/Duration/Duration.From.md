---
title: Duration.From
---

# Duration.From


## Description

Tworzy wartość typu duration na podstawie danej wartości.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Zwraca wartość typu <code>duration</code> z danej wartości parametru <code>value</code>. Jeśli dany parametr <code>value</code> ma wartość <code>null</code>, funkcja <code>Duration.From</code> zwraca wartość <code>null</code>.  Jeśli dany parametr <code>value</code> ma wartość typu <code>duration</code>, zwracana jest wartość <code>value</code>. Na wartość typu <code>duration</code> można konwertować wartości następujących typów:      <ul>        <li><code>text</code>: wartość typu <code>duration</code> z tekstowej formy zapisu czasu, który upłynął (d.g:m:s). Zobacz opis funkcji <code>Duration.FromText</code>, aby uzyskać szczegółowe informacje.</li>        <li><code>number</code>: odpowiednik wartości typu <code>duration</code> dla liczby całych i ułamkowych dni wyrażonej przez wartość <code>value</code>.</li>      </ul>Jeśli wartość parametru <code>value</code> jest innego typu, jest zwracany błąd.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;2.525&lt;/code&gt; na wartość typu &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration

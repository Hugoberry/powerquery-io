---
title: Logical.From
---

# Logical.From


## Description

Tworzy wartość logiczną na podstawie danej wartości.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Zwraca wartość typu <code>logical</code> z danej wartości parametru <code>value</code>. Jeśli dany parametr <code>value</code> ma wartość <code>null</code>, funkcja <code>Logical.From</code> zwraca wartość <code>null</code>.  Jeśli dany parametr <code>value</code> ma wartość typu <code>logical</code>, zwracana jest wartość <code>value</code>. Na wartość typu <code>logical</code> można konwertować wartości następujących typów:      <ul>        <li><code>text</code>: wartość typu <code>logical</code> utworzona na podstawie wartości tekstowej (<code>"true"</code> lub <code>"false"</code>). Zobacz opis funkcji <code>Logical.FromText</code>, aby uzyskać szczegółowe informacje.</li>        <li><code>number</code>: wartość <code>false</code>, jeśli wartość <code>value</code> równa się <code>0</code> — w przeciwnym razie wartość <code>true</code>.</li>      </ul>Jeśli wartość parametru <code>value</code> jest innego typu, jest zwracany błąd.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;2&lt;/code&gt; na wartość typu &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical

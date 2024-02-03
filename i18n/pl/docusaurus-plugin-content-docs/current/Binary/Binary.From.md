---
title: Binary.From
---

# Binary.From


## Description

Tworzy wartość binarną na podstawie danej wartości.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Zwraca wartość typu <code>binary</code> z danej wartości parametru <code>value</code>. Jeśli dany parametr <code>value</code> ma wartość <code>null</code>, funkcja <code>Binary.From</code> zwraca wartość <code>null</code>.  Jeśli dany parametr <code>value</code> ma wartość typu <code>binary</code>, zwracana jest wartość <code>value</code>. Na wartość typu <code>binary</code> można konwertować wartości następujących typów:      <ul>        <li><code>text</code>: wartość typu <code>binary</code> z reprezentacji tekstowej. Zobacz opis funkcji <code>Binary.FromText</code>, aby uzyskać szczegółowe informacje.</li>      </ul>Jeśli wartość parametru <code>value</code> jest innego typu, jest zwracany błąd.


## Examples

### Example #1 
Pobierz wartość typu &lt;code&gt;binary&lt;/code&gt; z wartości &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary

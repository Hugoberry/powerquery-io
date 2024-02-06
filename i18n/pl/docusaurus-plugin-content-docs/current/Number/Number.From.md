---
title: Number.From
---

# Number.From


Tworzy liczbę na podstawie danej wartości.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Zwraca wartość typu <code>number</code> z danej wartości parametru <code>value</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).Jeśli dany parametr <code>value</code> ma wartość <code>null</code>, funkcja <code>Number.From</code> zwraca wartość <code>null</code>.  Jeśli dany parametr <code>value</code> ma wartość typu <code>number</code>, zwracana jest wartość <code>value</code>. Na wartość typu <code>number</code> można konwertować wartości następujących typów:      <ul>        <li><code>text</code>: wartość typu <code>number</code> z reprezentacji tekstowej. Obsługiwane są typowe formaty tekstowe („15”, „3 423,10”, „5,0E-10”). Zobacz opis funkcji <code>Number.FromText</code>, aby uzyskać szczegółowe informacje.</li>        <li><code>logical</code>: 1 dla wartości <code>true</code>, 0 dla wartości <code>false</code>.</li>        <li><code>datetime</code>: liczba zmiennoprzecinkowa o podwójnej precyzji, która zawiera odpowiednik daty automatyzacji łączenia i osadzania obiektów.</li>        <li><code>datetimezone</code>: liczba zmiennoprzecinkowa o podwójnej precyzji, która zawiera odpowiednik daty automatyzacji łączenia i osadzania obiektów dla lokalnej daty i godziny określonej w parametrze <code>value</code>.</li>        <li><code>date</code>: liczba zmiennoprzecinkowa o podwójnej precyzji, która zawiera odpowiednik daty automatyzacji łączenia i osadzania obiektów.</li>        <li><code>time</code>: wartość wyrażona w ułamkowych dniach.</li>        <li><code>duration</code>: wartość wyrażona w całych i ułamkowych dniach.</li>      </ul>Jeśli wartość parametru <code>value</code> jest innego typu, jest zwracany błąd.


## Examples

### Example #1 
Pobierz wartość typu &lt;code&gt;number&lt;/code&gt; z wartości &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Pobierz wartość typu &lt;code&gt;number&lt;/code&gt; z wartości &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Pobierz wartość &lt;code&gt;number&lt;/code&gt; z &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting

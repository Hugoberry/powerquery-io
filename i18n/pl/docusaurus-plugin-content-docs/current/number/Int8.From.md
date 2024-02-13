---
title: Int8.From
---

# Int8.From


Tworzy 8-bitową liczbę całkowitą ze znakiem z podanej wartości.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Zwraca 8-bitową liczbę całkowitą ze znakiem <code>number</code> dla podanej wartości <code>value</code>. Jeśli podana wartość <code>value</code> to wartość <code>null</code>, funkcja <code>Int8.From</code> zwraca wartość <code>null</code>.  Jeśli podana wartość <code>value</code> to <code>number</code> w zakresie 8-bitowej liczby całkowitej ze znakiem bez części ułamkowej, jest zwracana wartość <code>value</code>. Jeśli występuje część ułamkowa, liczba jest zaokrąglana przy użyciu podanego trybu zaokrąglania. Domyślny tryb zaokrąglania to <code>RoundingMode.ToEven</code>. Jeśli wartość <code>value</code> jest wartością innego typu, zostanie najpierw przekonwertowana na wartość <code>number</code> przy użyciu funkcji <code>Number.FromText</code>. Listę dostępnych trybów zaokrąglania można znaleźć w opisie funkcji <code>Number.Round</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Pobieranie 8-bitowej liczby całkowitej ze znakiem &lt;code&gt;number&lt;/code&gt; dla wartości &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Pobieranie 8-bitowej liczby całkowitej ze znakiem &lt;code&gt;number&lt;/code&gt; dla wartości &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; przy użyciu trybu zaokrąglania &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

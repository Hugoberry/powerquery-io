---
title: Single.From
---

# Single.From


Tworzy wartość o pojedynczej precyzji z podanej wartości.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Zwraca liczbę o pojedynczej precyzji <code>number</code> dla podanej wartości <code>value</code>. Jeśli podana wartość <code>value</code> to wartość <code>null</code>, funkcja <code>Single.From</code> zwraca wartość <code>null</code>. Jeśli podana wartość <code>value</code> to <code>number</code> w zakresie liczby o pojedynczej precyzji, jest zwracana wartość <code>value</code> — w przeciwnym wypadku jest zwracany błąd. Jeśli wartość <code>value</code> jest wartością innego typu, najpierw zostanie przekonwertowana na wartość <code>number</code> przy użyciu funkcji <code>Number.FromText</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Pobieranie wartości o pojedynczej precyzji &lt;code&gt;number&lt;/code&gt; dla wartości &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting

---
title: Decimal.From
---

# Decimal.From


Tworzy wartość dziesiętną dla podanej wartości.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Zwraca liczbę dziesiętną <code>number</code> dla podanej wartości <code>value</code>. Jeśli podana wartość <code>value</code> to wartość <code>null</code>, funkcja <code>Decimal.From</code> zwraca wartość <code>null</code>. Jeśli podana wartość <code>value</code> to <code>number</code> w zakresie liczby dziesiętnej, jest zwracana wartość <code>value</code> — w innych wypadkach jest zwracany błąd. Jeśli wartość <code>value</code> jest wartością innego typu, najpierw zostanie przekonwertowana na wartość <code>number</code> przy użyciu funkcji <code>Number.FromText</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Pobiera liczbę dziesiętną &lt;code&gt;number&lt;/code&gt; dla wartości &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting

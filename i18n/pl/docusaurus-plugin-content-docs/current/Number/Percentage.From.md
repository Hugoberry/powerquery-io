---
title: Percentage.From
---

# Percentage.From


Zwraca wartość procentową danej wartości.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Zwraca wartość <code>percentage</code> dla danej wartości <code>value</code>. Jeśli dany element <code>value</code> ma wartość <code>null</code>, funkcja <code>Percentage.From</code> zwraca wartość <code>null</code>.  Jeśli dany element <code>value</code> ma wartość <code>text</code> z symbolem procenta na końcu, zostanie zwrócona skonwertowana liczba dziesiętna. W innym przypadku wartość zostanie przekonwertowana na wartość <code>number</code> przy użyciu funkcji <code>Number.From</code>. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Pobierz wartość &lt;code&gt;percentage&lt;/code&gt; z &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting

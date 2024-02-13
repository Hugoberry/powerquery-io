---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Zwraca funkcję porównującą bez uwzględniania wielkości liter, która umożliwia porównywanie wartości przy użyciu reguł porządkowych.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Zwraca funkcję porównującą bez uwzględniania wielkości liter, która używa reguł porządkowych do porównywania podanych wartości <code>x</code> i <code>y</code>.<br />        <br />        Funkcja porównująca akceptuje dwa argumenty i zwraca wartość -1, 0 lub 1 na podstawie tego, czy pierwsza wartość jest mniejsza, równa lub większa od drugiej.    


## Examples

### Example #1 
Korzystając z reguł porządkowych bez uwzględniania wielkości liter, porównaj wyrażenia „Abc” i „abc”. Zwróć uwagę, że w przypadku korzystania z funkcji &lt;code&gt;Comparer.Ordinal&lt;/code&gt; wyrażenie „Abc” będzie mniejsze niż „abc”. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer

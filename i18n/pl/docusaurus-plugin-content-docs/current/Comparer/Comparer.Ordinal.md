---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Zwraca funkcję porównania, która porównuje wartości przy użyciu reguł liczb porządkowych.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Zwraca funkcję porównującą, która używa reguł porządkowych do porównywania podanych wartości <code>x</code> i <code>y</code><br />      <br />      Funkcja porównująca akceptuje dwa argumenty i zwraca wartość -1, 0 lub 1 na podstawie tego, czy pierwsza wartość jest mniejsza niż, równa lub większa od drugiej.    


## Examples

### Example #1 
Używając reguł liczb porządkowych, porównaj wartości „encyclopædia” i „encyclopaedia”, aby sprawdzić, czy są równoważne. Sprawdź równoważność tych wartości za pomocą funkcji &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer

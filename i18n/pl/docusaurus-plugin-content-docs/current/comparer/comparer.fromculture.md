---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Zwraca funkcję porównującą na podstawie określonej kultury i wielkości liter.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Zwraca funkcję porównującą, która używa `culture` i funkcji uwzględniania wielkości liter określonej przez `ignoreCase` w celu wykonywania porównań.  
  
Funkcja porównująca akceptuje dwa argumenty i zwraca wartość -1, 0 lub 1 w zależności od tego, czy pierwsza wartość jest mniejsza niż, równa lub większa niż druga.  
  
Wartość domyślna dla `ignoreCase` to false. Wartość `culture` powinna być jedną z ustawień regionalnych obsługiwanych przez strukturę platformy .NET (na przykład „en-US”).


## Examples

### Example #1
Porównaj wartości „a” i „A” przy użyciu ustawień regionalnych „pl-PL”, aby sprawdzić, czy wartości są równe.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Porównaj wartości „a” i „A” przy użyciu ustawień regionalnych „pl-PL” bez uwzględniania wielkości liter, aby sprawdzić, czy wartości są równe.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer

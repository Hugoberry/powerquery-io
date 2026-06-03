---
title: Comparer.Equals
---

# Comparer.Equals


Zwraca wartość logiczną na podstawie sprawdzania równości dwóch podanych wartości.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Zwraca wartość `logiczną` w oparciu o sprawdzanie równości dwóch podanych wartości – `x` i `y`, używając podanej wartości `comparer`.

`comparer` to `funkcja porównująca`, która służy do kontrolowania porównania. Funkcja porównująca to funkcja, która akceptuje dwa argumenty i zwraca wartość -1, 0 lub 1 na podstawie tego, czy pierwsza wartość jest mniejsza niż, równa lub większa od drugiej. Funkcje porównujące mogą służyć do dostarczania porównania bez uwzględniania wielkości liter świadomości kulturowej czy regionalnej.

Następujące wbudowane funkcje porównujące są dostępne w języku formuł:

-   `Comparer.Ordinal`: służy do dokładnego porównania porządkowego
-   `Comparer.OrdinalIgnoreCase`: służy do wykonywania dokładnego porównania porządkowego bez uwzględniania wielkości liter
-   `Comparer.FromCulture`: służy do wykonywania porównania uwzględniającego świadomość kulturową


## Examples

### Example #1
Porównaj wartości „1” i „A” przy użyciu ustawień regionalnych „pl-PL”, aby sprawdzić, czy wartości są równe.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer

---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Zwraca wartość logiczną na podstawie sprawdzania równości dwóch podanych wartości.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Zwraca wartość <code>logiczną</code> w oparciu o sprawdzanie równości dwóch podanych wartości – <code>x</code> i <code>y</code>, używając podanej wartości <code>comparer</code>.      <div>        <code>comparer</code> to <code>funkcja porównująca</code>, która służy do kontrolowania porównania.        Funkcja porównująca to funkcja, która akceptuje dwa argumenty i zwraca wartość -1, 0 lub 1 na podstawie tego, czy pierwsza wartość jest mniejsza niż, równa lub większa od drugiej.        Funkcje porównujące mogą służyć do dostarczania porównania bez uwzględniania wielkości liter świadomości kulturowej czy regionalnej.      </div>      <div>        Następujące wbudowane funkcje porównujące są dostępne w języku formuł:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: służy do dokładnego porównania porządkowego</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: służy do wykonywania dokładnego porównania porządkowego bez uwzględniania wielkości liter</li>        <li> <code>Comparer.FromCulture</code>: służy do wykonywania porównania uwzględniającego świadomość kulturową</li>      </ul>


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

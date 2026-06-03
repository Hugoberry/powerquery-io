---
title: Currency.From
---

# Currency.From


Zwraca wartość waluty dla danej wartości.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Zwraca wartość typu `currency` dla danej wartości: `value`. Jeśli dana wartość `value` to `null`, funkcja `Currency.From` zwraca wartość `null`. Jeśli typ danej wartości `value` to `number`, czyli liczba z zakresu waluty, część ułamkowa wartości `value` jest zaokrąglana do 4 miejsc po przecinku i zwracana. Jeśli wartość `value` jest wartością innego typu, zostanie ona najpierw przekonwertowana na wartość typu `number` przy użyciu funkcji `Number.FromText`. Poprawny zakres wartości waluty to `-922 337 203 685 477,5808`–`922 337 203 685 477,5807`. Zobacz opis funkcji `Number.Round`, aby uzyskać listę dostępnych trybów zaokrąglania. Ustawienie domyślne to `RoundingMode.ToEven`. Można także określić opcjonalny parametr `culture` (na przykład „en-US”).


## Examples

### Example #1
Pobierz wartość `currency`: `"1,23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Uzyskaj wartość `currency` dla ciągu `"1,23455"` przy użyciu trybu `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting

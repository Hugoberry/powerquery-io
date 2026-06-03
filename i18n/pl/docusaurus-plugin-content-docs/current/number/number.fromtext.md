---
title: Number.FromText
---

# Number.FromText


Tworzy liczby na podstawie wartości w typowych formatach tekstowych („15”, „3 423,10”, „5,0E-10”).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Zwraca wartość typu `number` z danej wartości tekstowej `text`.

-   `text`: Tekstowa reprezentacja wartości liczbowej. Reprezentacja musi być zapisana w typowym formacie liczbowym, takim jak „15”, „3,423.10” lub „5.0E-10”.
-   `culture`: Opcjonalna kultura kontrolująca sposób interpretacji elementu `text` (na przykład „en-US”).


## Examples

### Example #1
Określ wartość liczbową na podstawie wartości `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Określ wartość liczbową na podstawie wartości `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting

---
title: List.Random
---

# List.Random


Returnerer en liste over tilfældige tal.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Returnerer en liste over tilfældige tal mellem 0 og 1 med det antal værdier, der skal genereres, og en valgfri seed-værdi.

-   `count`: Antallet af tilfældige værdier, der skal genereres.
-   `seed`: *(Valgfri)* En numerisk værdi, der bruges til at udfylde generatoren af tilfældige tal. Hvis den udelades, genereres der en entydig liste over tilfældige tal, hver gang du kalder funktionen. Hvis du angiver basisværdien med et tal, genererer alle kald til funktionen den samme liste over tilfældige tal.


## Examples

### Example #1
Opret en liste over 3 tilfældige tal.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2
Opret en liste over 3 tilfældige tal, hvor du angiver basisværdien.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators

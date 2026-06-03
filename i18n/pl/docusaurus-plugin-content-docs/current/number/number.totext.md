---
title: Number.ToText
---

# Number.ToText


Konwertuje daną liczbę na tekst.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Konwertuje wartość liczbową `number` na wartość tekstową zgodnie z formatem określonym przez `format`.  
  
Format jest wartością tekstową wskazującą sposób konwertowania liczby. Aby uzyskać więcej informacji na temat obsługiwanych wartości formatu, przejdź do https://go.microsoft.com/fwlink/?linkid=2241210 and https://go.microsoft.com/fwlink/?linkid=2240884.  
  
Można również podać opcjonalne `culture` (na przykład „en-US”) w celu kontrolowania zachowania kulturowego `format`.


## Examples

### Example #1
Konwertuj liczbę na tekst bez określania formatu.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2
Konwertuj liczbę na format wykładniczy.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3
Konwertuj liczbę na format procentowy z tylko jednym miejscem dziesiętnym.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting

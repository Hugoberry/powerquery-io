---
title: Guid.From
---

# Guid.From


Zwraca wartość identyfikatora GUID danej wartości.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Zwraca wartość funkcji <code>Guid.Type</code> dla danej wartości <code>value</code>. Jeśli podana wartość <code>value</code> ma wartość <code>null</code>, funkcja <code>Guid.From</code> zwraca wartość <code>null</code>. Dany element <code>value</code> zostanie sprawdzony pod kątem dozwolonego formatu. Dozwolone formaty można znaleźć w przykładach.


## Examples

### Example #1 
Identyfikator GUID można podać jako 32 sąsiadujące cyfry szesnastkowe.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Identyfikator GUID można podać jako 32 cyfry szesnastkowe rozdzielone łącznikami na bloki po 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Identyfikator GUID można podać jako 32 cyfry szesnastkowe rozdzielone łącznikami i ujęte w nawiasy klamrowe.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Identyfikator GUID można podać jako 32 cyfry szesnastkowe rozdzielone łącznikami i ujęte w nawiasy.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text

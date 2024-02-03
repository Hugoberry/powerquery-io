---
title: Guid.From
---

# Guid.From


## Description

Vraća vrednost za guid iz date vrednosti.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Vraća vrednost <code>Guid.Type</code> iz date <code>value</code>. Ako je dati <code>value</code> jednak <code>nuli</code>, <code>Guid.From</code> vraća <code>null</code>.  Biće izvršena promena da bi se utvrdilo da li je <code>value</code> u prihvatljivom formatu. Prihvatljivi formati su navedeni u primerima.


## Examples

### Example #1 
Guid se može navesti u vidu 32 susedne heksademicalne cifre.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Guid se može navesti u vidu 32 heksademicalne cifre odvojene crtama u blokove 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Guid se može navesti u vidu 32 heksademicalne cifre odvojene crtama i u velikim zagradama.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Guid se može navesti u vidu 32 heksademicalne cifre odvojene crtama i u zagradama.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text

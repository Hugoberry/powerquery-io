---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Returnerer værdien af den angivne variabel eller standardværdien, hvis variablen ikke er defineret.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Returnerer værdien af den angivne variabel `identifier` defineret af det aktuelle evalueringsmiljø. Hvis variablen ikke er defineret, returneres den valgfrie `defaultValue`.



## Category
Values.Implementation

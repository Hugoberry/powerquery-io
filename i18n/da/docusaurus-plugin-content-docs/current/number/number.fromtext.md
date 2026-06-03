---
title: Number.FromText
---

# Number.FromText


Opretter tal ud fra almindelige tekstformater (15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Returnerer en værdi af typen `number` ud fra den angivne tekstværdi, `text`.

-   `text`: Tekstrepræsentationen for en talværdi. Repræsentationen skal være i et almindelige talformat, som f.eks. "15", "3,423.10", "5.0E-10".
-   `culture`: En valgfri kultur, der styrer, hvordan `text` fortolkes (f.eks. "en-US").


## Examples

### Example #1
Hent talværdien `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Hent talværdien `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting

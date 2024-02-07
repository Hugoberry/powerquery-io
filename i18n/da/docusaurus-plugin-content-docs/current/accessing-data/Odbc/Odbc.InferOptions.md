---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Returnerer resultatet af forsøget på at indføre SQL-funktioner til en ODBC-driver.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Returnerer resultatet af forsøget på at udlede SQL-egenskaber med forbindelsesstrengen <code>connectionString</code> ved hjælp af ODBC. <code>connectionString</code> kan være tekst eller en post med egenskabsværdipar. Egenskabsværdier kan enten være en tekst eller et tal.


## Examples

### Example #1 
Returner de afledte SQL-funktioner for en forbindelsesstreng.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data

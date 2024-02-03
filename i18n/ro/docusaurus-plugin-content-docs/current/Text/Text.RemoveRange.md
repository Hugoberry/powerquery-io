---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Elimină un număr de caractere care începe la decalajul dat.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Returnează o copie a valorii text <code>text</code>, cu toate caracterele de la poziția <code>offset</code> eliminate.    Poate fi utilizat un parametru opțional, <code>count</code>, pentru a specifica numărul de caractere de eliminat. Valoarea implicită a <code>count</code> este 1. Valorile pentru poziție încep de la 0.


## Examples

### Example #1 
Eliminaţi 1 caracter din valoarea text „ABEFC” la poziţia 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Eliminaţi două caractere din valoarea text „ABEFC” începând cu poziţia 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
